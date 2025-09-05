import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'chatbot', label: 'Chatbot' },
    { id: 'fisheries', label: 'Fisheries' }
  ];
  
  // Sliding indicator position (measured for reliability)
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  useEffect(() => {
    const update = () => {
      if (!navRef.current) return;
      const activeId = currentPage && navItems.some(n => n.id === currentPage)
        ? currentPage
        : navItems[0].id;
      const navRect = navRef.current.getBoundingClientRect();
      const activeBtn = navRef.current.querySelector<HTMLButtonElement>(`button[data-page="${activeId}"]`);
      if (activeBtn) {
        const btnRect = activeBtn.getBoundingClientRect();
        // Fixed uniform pill width instead of matching button width
        const uniformWidth = 120; // Fixed pill width
        const pillLeft = btnRect.left - navRect.left + (btnRect.width - uniformWidth) / 2;
        setIndicator({ left: pillLeft, width: uniformWidth });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [currentPage]);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Government of India Emblem */}
            <div className="flex items-center space-x-3">
              <ImageWithFallback 
                src="/src/assets/emblem-dark.png" 
                alt="Government of India Emblem"
                className="h-12 w-auto"
              />
              <div className="border-l border-gray-300 pl-3">
                <div className="text-blue-900 font-semibold text-lg">Ministry of Earth Sciences</div>
                <div className="text-gray-600 text-sm">Government of India</div>
              </div>
            </div>

            {/* Additional Government Scheme Logos */}
            <div className="flex items-center space-x-4 ml-8">
              <ImageWithFallback 
                src="/src/assets/swach-bharat.png" 
                alt="Swachh Bharat"
                className="h-8 w-auto"
              />
              <ImageWithFallback 
                src="/src/assets/beti-bachao-logo2.png" 
                alt="Beti Bachao Beti Padhao"
                className="h-8 w-auto"
              />
              <ImageWithFallback 
                src="/src/assets/yoga-logo-days_1.png" 
                alt="International Day of Yoga"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {onNavigate && (
      <nav ref={navRef} className="relative bg-gray-100 rounded-full p-1.5 shadow-inner">
              {/* Sliding indicator pill */}
              <div
        className="absolute rounded-full bg-blue-600 shadow-md transition-all duration-300 ease-in-out z-0"
        style={{ left: indicator.left, width: indicator.width, top: 3, bottom: 3 }}
              />

              {/* Navigation buttons */}
              <div className="flex relative z-10 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    data-page={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap flex items-center justify-center ${
                      currentPage === item.id
                        ? 'text-white'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}