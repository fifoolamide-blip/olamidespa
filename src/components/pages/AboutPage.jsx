import React from 'react';

const TEAM = [
  { name: 'Amara Okafor', role: 'Lead Therapist', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80' },
  { name: 'Chidi Nwosu', role: 'Skincare Specialist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80' },
  { name: 'Fatima Bello', role: 'Wellness Director', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&q=80' },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Story */}
      <section className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-3">Our Story</p>
          <h1 className="font-heading text-5xl font-bold text-text-primary mb-6">Born From a Love of Wellness</h1>
          <p className="font-body text-text-secondary leading-relaxed text-lg">
            Sérénité was founded in Lagos in 2018 with a single vision: to create a space where every guest leaves feeling renewed.
            Combining ancient wellness traditions with modern luxury, we curate every detail — from our handpicked therapists to our
            organic product line — to ensure an unmatched experience.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=700&q=80"
            alt="Spa interior"
            className="rounded-3xl shadow-xl object-cover w-full h-80"
          />
          <div>
            <p className="font-body text-sm uppercase tracking-widest text-accent mb-3">Our Mission</p>
            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Wellness That Goes Deeper</h2>
            <p className="font-body text-text-secondary leading-relaxed">
              We believe true wellness is the harmony of body, mind, and spirit. Our certified therapists approach
              every session holistically — listening to your needs and customizing each treatment to deliver lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">The Experts</p>
            <h2 className="font-heading text-4xl font-bold text-text-primary">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, img }) => (
              <div key={name} className="card-soft overflow-hidden text-center">
                <img src={img} alt={name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-text-primary">{name}</h3>
                  <p className="font-body text-sm text-accent mt-1">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white text-center">
        <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">Certified & Trusted</h2>
        <p className="font-body text-text-secondary max-w-xl mx-auto">
          Our spa holds certifications from the International Spa Association (ISPA), the Nigerian Wellness Council,
          and all our therapists are individually licensed professionals.
        </p>
      </section>
    </div>
  );
}
