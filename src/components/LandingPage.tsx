import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MessageSquare, BarChart3, Box, Fish } from "lucide-react";

// Use bundled URL for hero image to work in dev and build
const heroBg = new URL("../assets/heroImg.png", import.meta.url).href;

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const navigationCards = [
    {
      title: "Chatbot Interface",
      description: "Ask questions about ocean data",
      icon: MessageSquare,
      page: "chatbot",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      title: "Dashboard Page", 
      description: "View ocean data analytics",
      icon: BarChart3,
      page: "dashboard",
      gradient: "from-slate-700 to-slate-600"
    },
    {
      title: "3D Visualizations",
      description: "Explore 3D ocean data",
      icon: Box,
      page: "3d-viz",
      gradient: "from-blue-700 to-blue-600"
    },
    {
      title: "Ideal Fishing Zones",
      description: "AI-powered fishing zone analysis",
      icon: Fish,
      page: "fisheries",
      gradient: "from-slate-800 to-slate-700"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: '102%',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Glowing Network Nodes Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-70">
            {/* Network nodes and connections */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Sample network connections */}
            <line x1="10%" y1="20%" x2="25%" y2="40%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            <line x1="25%" y1="40%" x2="45%" y2="30%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            <line x1="45%" y1="30%" x2="65%" y2="50%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            <line x1="65%" y1="50%" x2="85%" y2="25%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            <line x1="20%" y1="70%" x2="40%" y2="80%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            <line x1="40%" y1="80%" x2="70%" y2="75%" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
            
            {/* Glowing nodes */}
            <circle cx="10%" cy="20%" r="4" fill="#3b82f6" filter="url(#glow)" />
            <circle cx="25%" cy="40%" r="3" fill="#60a5fa" filter="url(#glow)" />
            <circle cx="45%" cy="30%" r="4" fill="#3b82f6" filter="url(#glow)" />
            <circle cx="65%" cy="50%" r="3" fill="#60a5fa" filter="url(#glow)" />
            <circle cx="85%" cy="25%" r="4" fill="#3b82f6" filter="url(#glow)" />
            <circle cx="20%" cy="70%" r="3" fill="#f97316" filter="url(#glow)" />
            <circle cx="40%" cy="80%" r="4" fill="#f97316" filter="url(#glow)" />
            <circle cx="70%" cy="75%" r="3" fill="#f97316" filter="url(#glow)" />
            <circle cx="90%" cy="60%" r="4" fill="#60a5fa" filter="url(#glow)" />
            <circle cx="30%" cy="15%" r="3" fill="#f97316" filter="url(#glow)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-bold">
            ARGO Ocean Intelligence Platform
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unified access to real-time and historical oceanographic data powered by the global ARGO array
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">3,800+</div>
              <div className="text-sm text-slate-300">Active ARGO Floats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">2M+</div>
              <div className="text-sm text-slate-300">Ocean Profiles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">24/7</div>
              <div className="text-sm text-slate-300">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationCards.map((card, index) => (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden border-0"
                onClick={() => onNavigate(card.page)}
              >
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${card.gradient} p-6 text-white relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                        backgroundSize: '15px 15px'
                      }}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <card.icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg mb-2">{card.title}</h3>
                      <p className="text-sm text-white/90">{card.description}</p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-slate-800">Advanced Ocean Intelligence</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Harness the power of global ARGO data for comprehensive oceanographic analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl mb-3 text-slate-800">Real-time Data</h3>
              <p className="text-slate-600">Access live oceanographic data from thousands of ARGO floats worldwide</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-slate-600 rounded"></div>
              </div>
              <h3 className="text-xl mb-3 text-slate-800">AI Analytics</h3>
              <p className="text-slate-600">Leverage machine learning for predictive ocean analysis and insights</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-700 rounded"></div>
              </div>
              <h3 className="text-xl mb-3 text-slate-800">Interactive Viz</h3>
              <p className="text-slate-600">Explore data through interactive charts, maps, and 3D visualizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* About ARGO Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-slate-800">About the ARGO Program</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The ARGO program is a global network of autonomous profiling floats that measure temperature, 
                salinity, and other ocean properties. This revolutionary system provides real-time data for 
                climate research, weather prediction, and marine resource management.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Global coverage with over 3,800 active floats</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>20+ years of continuous ocean observation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Free and open data access for research</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Critical for climate change monitoring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl mb-6">Data Coverage</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Temperature Profiles</span>
                  <span className="text-2xl">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Salinity Measurements</span>
                  <span className="text-2xl">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pressure Readings</span>
                  <span className="text-2xl">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>BGC Parameters</span>
                  <span className="text-2xl">500K+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-slate-800">Platform Applications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering research, policy, and industry with comprehensive ocean intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-blue-600">
              <h3 className="text-xl mb-4 text-slate-800">Climate Research</h3>
              <p className="text-slate-600 mb-4">
                Track ocean heat content, sea level rise, and climate indicators with high-precision data from the ARGO network.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Ocean-atmosphere heat exchange</li>
                <li>• Deep water formation patterns</li>
                <li>• Climate model validation</li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-slate-600">
              <h3 className="text-xl mb-4 text-slate-800">Marine Fisheries</h3>
              <p className="text-slate-600 mb-4">
                Optimize fishing operations with AI-powered zone predictions based on environmental conditions and species behavior.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Optimal fishing zone identification</li>
                <li>• Species distribution modeling</li>
                <li>• Seasonal migration patterns</li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-blue-700">
              <h3 className="text-xl mb-4 text-slate-800">Weather Forecasting</h3>
              <p className="text-slate-600 mb-4">
                Improve weather and seasonal predictions with real-time ocean temperature and salinity measurements.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Monsoon prediction accuracy</li>
                <li>• Cyclone intensity forecasting</li>
                <li>• Ocean-atmosphere modeling</li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-slate-700">
              <h3 className="text-xl mb-4 text-slate-800">Policy & Management</h3>
              <p className="text-slate-600 mb-4">
                Support evidence-based policy decisions for marine conservation, shipping, and coastal management.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Marine protected area planning</li>
                <li>• Shipping route optimization</li>
                <li>• Coastal vulnerability assessment</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}