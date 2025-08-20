import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import schoolSlide1 from "@/assets/school-slide-1.jpg";
import schoolSlide2 from "@/assets/school-slide-2.jpg";
import schoolSlide3 from "@/assets/school-slide-3.jpg";

const slides = [
  { image: schoolSlide1, alt: "Escola - Ambiente Exterior" },
  { image: schoolSlide2, alt: "Escola - Sala de Aula" },
  { image: schoolSlide3, alt: "Escola - Evento da APM" },
];

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-10" />
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-card/80 hover:bg-card p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-card/80 hover:bg-card p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-card/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};