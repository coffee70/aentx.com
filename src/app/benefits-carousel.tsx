'use client';

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from "lucide-react";

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

export default function BenefitsCarousel() {
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
    <section id="benefits" className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 mb-6">
            <SparklesIcon className="w-4 h-4 mr-2 text-blue-600" />
            Key Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable impact on your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              business operations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how AENTX transforms manufacturing operations across your entire business
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Modern carousel container */}
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex w-full">
                {benefitItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex-grow-0 p-12 sm:p-16 bg-gradient-to-br from-white to-blue-50"
                  >
                    <div className="text-center max-w-2xl mx-auto">
                      <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 leading-tight">{item.title}</h3>
                      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation positioned at bottom */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevSlide}
              className="bg-white border border-gray-200 rounded-xl p-3 text-gray-600 hover:text-gray-900 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon size={20} />
            </button>

            <div className="flex space-x-2">
              {benefitItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-blue-600 scale-150'
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-125'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNextSlide}
              className="bg-white border border-gray-200 rounded-xl p-3 text-gray-600 hover:text-gray-900 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Next slide"
            >
              <ChevronRightIcon size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
} 