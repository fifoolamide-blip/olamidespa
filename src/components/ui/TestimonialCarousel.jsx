import React, { useState } from 'react';

const TESTIMONIALS = [
  { name: 'Ngozi A.', text: 'Absolutely the best spa experience I\'ve ever had in Lagos. The therapists are incredibly skilled and the atmosphere is pure bliss.', rating: 5 },
  { name: 'Emeka D.', text: 'Booked a couple\'s retreat for our anniversary. We left feeling completely rejuvenated. Will definitely be back!', rating: 5 },
  { name: 'Tunde O.', text: 'The luxury facial transformed my skin. I couldn\'t believe the difference after just one session.', rating: 5 },
  { name: 'Adaeze M.', text: 'Everything from the booking process to the treatment itself was seamless and professional. Highly recommended.', rating: 5 },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const { name, text, rating } = TESTIMONIALS[active];

  return (
    <div className="text-center">
      <div className="bg-white card-soft p-10 max-w-2xl mx-auto">
        <div className="text-accent text-2xl mb-4">{'★'.repeat(rating)}</div>
        <p className="font-body text-text-secondary text-lg leading-relaxed mb-6 italic">"{text}"</p>
        <p className="font-heading font-semibold text-text-primary">— {name}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 flex items-center justify-center"
          aria-label="Previous"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === active ? 'bg-accent scale-125' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 flex items-center justify-center"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
