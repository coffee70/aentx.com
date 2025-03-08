'use client';

import { Logo } from "./logo";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const features = [
  {
    title: "Model Creation",
    description: "Create detailed digital models representing your physical manufacturing items with customizable fields and specifications.",
    icon: "📐"
  },
  {
    title: "Process Management",
    description: "Define and manage manufacturing processes with routers that track each step of production across locations.",
    icon: "⚙️"
  },
  {
    title: "Document Attachments",
    description: "Attach PDFs, specifications, and important documentation to both models and processes for comprehensive record-keeping.",
    icon: "📎"
  },
  {
    title: "Distributed Collaboration",
    description: "Enable team collaboration across multiple locations with real-time comments and updates on manufacturing progress.",
    icon: "🤝"
  },
  {
    title: "Priority Management",
    description: "Organize and prioritize manufacturing tasks to optimize production flow and meet deadlines efficiently.",
    icon: "🎯"
  },
  {
    title: "Custom Fields",
    description: "Administrators can add custom fields to models and routers, tailoring the system to your specific needs.",
    icon: "✏️"
  }
];

const benefitItems = [
  {
    title: "Increased Efficiency",
    description: "Reduce production time by up to 35% with streamlined workflows and optimized manufacturing processes.",
    icon: "🚀"
  },
  {
    title: "Enhanced Collaboration",
    description: "Connect teams across multiple locations with real-time updates and centralized documentation.",
    icon: "🌐"
  },
  {
    title: "Quality Control",
    description: "Maintain consistent quality standards with detailed specifications and process tracking.",
    icon: "✅"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = benefitItems.length;
  
  // Auto-advance the carousel every 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, totalSlides]);
  
  // Navigation handlers
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <main className="min-h-screen">
      {/* App Bar */}
      <nav className="fixed top-0 w-full bg-black text-white z-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-[#444444]">
        <div className="w-full flex justify-between items-center">
          <Logo />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 border border-[#444444] mx-2 sm:m-4 mt-14 sm:mt-4 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gradient-text">
            Transform Your Manufacturing Pipeline
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-10">
            Streamline your manufacturing processes with our comprehensive pipeline management tool. 
            Create models, manage workflows, and collaborate across locations seamlessly.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 border border-[#444444] mx-2 sm:m-4 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
            Powerful Features for Modern Manufacturing
          </h2>
          <p className="text-base sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            Our pipeline management tool is designed to address the unique challenges of modern manufacturing companies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#111111] p-6 sm:p-8 rounded-lg border border-[#444444] hover:border-[#00ffcc] transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section id="benefits" className="py-12 sm:py-20 px-4 sm:px-6 border border-[#444444] mx-2 sm:m-4 rounded-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white">
            Key Benefits
          </h2>
          <p className="text-base sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            See how AENTX transforms manufacturing operations across your entire business
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            {/* Carousel container with proper positioning context */}
            <div className="relative">
              {/* Navigation buttons positioned relative to this container only */}
              <button 
                onClick={goToPrevSlide}
                className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-0 z-20 bg-black/70 border border-[#444444] rounded-full p-1.5 text-white hover:text-white hover:bg-black hover:border-[#00ffcc] transition-all opacity-80 hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon size={20} />
              </button>
              
              <div className="px-0 sm:mx-8 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="flex w-full">
                    {benefitItems.map((item, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 flex-grow-0 p-6 sm:p-8 bg-[#111111] border border-[#444444] rounded-xl"
                      >
                        <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={goToNextSlide}
                className="absolute -right-10 top-1/2 -translate-y-1/2 translate-x-0 z-20 bg-black/70 border border-[#444444] rounded-full p-1.5 text-white hover:text-white hover:bg-black hover:border-[#00ffcc] transition-all opacity-80 hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>
            
            {/* Indicator dots outside the carousel positioning context */}
            <div className="flex justify-center space-x-2 mt-6">
              {benefitItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#00ffcc]' : 'bg-[#444444] hover:bg-[#666666]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-black text-white border border-[#444444] mx-2 sm:m-4 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Optimize Your Manufacturing Pipeline?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-10">
            Join hundreds of manufacturing companies that have transformed their operations with AENTX.
          </p>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 border-t border-[#444444]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">AENTX</h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
              Revolutionizing manufacturing pipeline management with cutting-edge technology that connects teams and streamlines processes.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">© 2024 AENTX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
