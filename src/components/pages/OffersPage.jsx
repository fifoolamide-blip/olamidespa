import React from 'react';
import { Link } from 'react-router-dom';

const OFFERS = [
  {
    title: 'Couple\'s Retreat',
    description: 'Two side-by-side massages, facial treatments, and complimentary herbal tea.',
    price: 45000,
    badge: 'Most Popular',
    color: 'bg-primary/20',
  },
  {
    title: 'Seasonal Bliss Package',
    description: 'Full body treatment, exfoliation scrub, and signature facial — all in one session.',
    price: 35000,
    badge: 'Limited Offer',
    color: 'bg-accent/10',
  },
  {
    title: 'Loyalty Rewards',
    description: 'Earn points on every visit. Redeem for free treatments, discounts, or gift cards.',
    price: null,
    badge: 'Ongoing',
    color: 'bg-secondary',
  },
];

export default function OffersPage() {
  return (
    <div className="pt-24 min-h-screen bg-white section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Exclusive</p>
          <h1 className="font-heading text-5xl font-bold text-text-primary">Special Offers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map(({ title, description, price, badge, color }) => (
            <div key={title} className={`card-soft p-8 ${color}`}>
              <span className="inline-block text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                {badge}
              </span>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">{title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">{description}</p>
              {price && (
                <p className="font-heading text-3xl font-bold text-accent mb-6">₦{price.toLocaleString()}</p>
              )}
              <Link to="/booking" className="btn-primary block text-center text-sm">
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
