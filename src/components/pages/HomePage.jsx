import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../services/ServiceCard';
import TestimonialCarousel from '../ui/TestimonialCarousel';

const SERVICES_PREVIEW = [
  {
    _id: '1',
    name: 'Deep Tissue Massage',
    description: 'Release deep muscle tension and melt away stress with our signature massage therapy.',
    duration: 60,
    price: 15000,
    category: 'Massage',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  },
  {
    _id: '2',
    name: 'Luxury Facial',
    description: 'Rejuvenate your skin with our premium facial treatments curated for your skin type.',
    duration: 45,
    price: 12000,
    category: 'Facials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
  {
    _id: '3',
    name: 'Body Wrap Treatment',
    description: 'A full-body detox wrap using natural minerals to nourish and refresh your skin.',
    duration: 75,
    price: 18000,
    category: 'Body Treatments',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  },
];

const WHY_US = [
  { icon: '🏅', title: 'Certified Therapists', desc: 'All our specialists are internationally certified with years of experience.' },
  { icon: '✨', title: 'Luxury Environment', desc: 'Every corner of our spa is designed to inspire tranquility and elegance.' },
  { icon: '💛', title: 'Personalized Care', desc: 'Treatments tailored to your unique needs, every single visit.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center text-white px-6 animate-slide-up">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">Welcome to Sérénité</p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            Relax. Refresh.<br />Renew.
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto">
            Experience luxury wellness like never before
          </p>
          <Link to="/booking" className="btn-primary text-base px-10 py-4">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">What We Offer</p>
            <h2 className="font-heading text-4xl font-bold text-text-primary">Our Signature Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_PREVIEW.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Why Us</p>
            <h2 className="font-heading text-4xl font-bold text-text-primary">The Sérénité Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {WHY_US.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-8 card-soft">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">{title}</h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Our Guests</p>
            <h2 className="font-heading text-4xl font-bold text-text-primary">What They Say</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Offers Banner */}
      <section className="section-padding bg-text-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-3">Limited Time</p>
          <h2 className="font-heading text-4xl font-bold mb-4">Exclusive Spa Packages</h2>
          <p className="font-body text-gray-300 mb-8">
            Couple retreats, seasonal bundles, and loyalty rewards — curated for your pleasure.
          </p>
          <Link to="/offers" className="btn-primary">Explore Offers</Link>
        </div>
      </section>
    </>
  );
}
