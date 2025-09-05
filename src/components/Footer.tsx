export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Government of India Emblem Placeholder */}
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-yellow-900 text-xs">GoI</span>
            </div>
            <div className="text-sm text-slate-300">
              © 2024 Ministry of Earth Sciences, Government of India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}