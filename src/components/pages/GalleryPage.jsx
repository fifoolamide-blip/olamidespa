import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
];

export default function GalleryPage() {
  return (
    <div className="pt-24 section-padding bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Our Space</p>
          <h1 className="font-heading text-5xl font-bold text-text-primary">Gallery</h1>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Spa gallery ${i + 1}`}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
