import React, { useState, useEffect } from 'react';
import ServiceCard from '../services/ServiceCard';
import { getServices } from '../../utils/api';

const CATEGORIES = ['All', 'Massage', 'Facials', 'Body Treatments'];

const MOCK_SERVICES = [
  { _id: '1', name: 'Deep Tissue Massage', description: 'Release deep muscle tension.', duration: 60, price: 15000, category: 'Massage', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
  { _id: '2', name: 'Swedish Massage', description: 'A gentle full-body relaxation massage.', duration: 60, price: 12000, category: 'Massage', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80' },
  { _id: '3', name: 'Luxury Facial', description: 'Rejuvenate your skin with premium care.', duration: 45, price: 12000, category: 'Facials', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
  { _id: '4', name: 'Anti-Aging Facial', description: 'Reduce fine lines and restore glow.', duration: 60, price: 18000, category: 'Facials', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
  { _id: '5', name: 'Body Wrap', description: 'Full-body detox wrap using natural minerals.', duration: 75, price: 18000, category: 'Body Treatments', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
  { _id: '6', name: 'Exfoliation Scrub', description: 'Reveal smoother, radiant skin.', duration: 45, price: 10000, category: 'Body Treatments', image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600&q=80' },
];

export default function ServicesPage() {
  const [services, setServices] = useState(MOCK_SERVICES);
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(50000);
  const [maxDuration, setMaxDuration] = useState(120);

  useEffect(() => {
    getServices()
      .then((data) => { if (data.length) setServices(data); })
      .catch(() => {});
  }, []);

  const filtered = services.filter((s) => {
    const catMatch = category === 'All' || s.category === category;
    const priceMatch = s.price <= maxPrice;
    const durMatch = s.duration <= maxDuration;
    return catMatch && priceMatch && durMatch;
  });

  return (
    <div className="pt-24 section-padding bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Explore</p>
          <h1 className="font-heading text-5xl font-bold text-text-primary">Our Services</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-10 flex flex-wrap gap-6 items-center">
          <div>
            <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">Category</p>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    category === cat ? 'bg-accent text-white border-accent' : 'border-gray-200 text-text-secondary hover:border-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-[180px]">
            <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">
              Max Price: ₦{maxPrice.toLocaleString()}
            </p>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-accent"
            />
          </div>
          <div className="flex-1 min-w-[180px]">
            <p className="text-xs font-medium text-text-secondary mb-2 uppercase tracking-wide">
              Max Duration: {maxDuration} min
            </p>
            <input
              type="range"
              min={30}
              max={120}
              step={15}
              value={maxDuration}
              onChange={(e) => setMaxDuration(Number(e.target.value))}
              className="w-full accent-accent"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-text-secondary py-20 font-body">No services match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
