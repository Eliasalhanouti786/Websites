'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="relative w-full h-56 sm:h-72 md:h-[500px] lg:h-[550px] overflow-hidden rounded-lg">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Image Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
          <h3 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 md:mb-2">{currentImage.title}</h3>
          <p className="text-xs md:text-base text-gray-100 line-clamp-2">{currentImage.description}</p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-cc0000 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-cc0000 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 md:gap-3 mt-3 md:mt-6 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 relative w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-md md:rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-cc0000 scale-105'
                : 'border-gray-300 hover:border-cc0000 opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-2 md:mt-4 text-center text-gray-600 text-xs md:text-sm">
        Project {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}
