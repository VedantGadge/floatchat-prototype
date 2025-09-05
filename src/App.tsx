import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { DashboardPage } from './components/DashboardPage';
import { ChatbotPage } from './components/ChatbotPage';
import { FisheriesPage } from './components/FisheriesPage';

type Page = 'home' | 'dashboard' | 'chatbot' | 'fisheries' | '3d-viz';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'fisheries':
        return <FisheriesPage />;
      case '3d-viz':
        return (
          <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl text-slate-800 mb-4">3D Visualizations</h1>
              <p className="text-slate-600 mb-8">Interactive 3D ocean data visualization coming soon...</p>
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto flex items-center justify-center">
                <div className="text-white text-6xl">🌊</div>
              </div>
            </div>
          </div>
        );
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}