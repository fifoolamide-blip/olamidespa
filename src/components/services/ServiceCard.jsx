import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const { _id, name, description, duration, price, image } = service;

  return (
    <div className="card-soft overflow-hidden group">
      <div className="overflow-hidden h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">{name}</h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">{description}</p>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs text-text-secondary font-body">⏱ {duration} min</span>
          <span className="font-heading text-lg font-bold text-accent">₦{price.toLocaleString()}</span>
        </div>
        <Link
          to={`/booking?service=${_id}`}
          className="btn-primary block text-center text-sm"
        >
          Book This Service
        </Link>
      </div>
    </div>
  );
}
