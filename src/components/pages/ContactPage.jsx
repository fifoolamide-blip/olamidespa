import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll be in touch soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Get in Touch</p>
          <h1 className="font-heading text-5xl font-bold text-text-primary">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {[
                { icon: '📞', label: 'Phone', value: '+234 800 000 0000' },
                { icon: '✉️', label: 'Email', value: 'hello@serenite.spa' },
                { icon: '📍', label: 'Address', value: '14 Adeola Odeku St, Victoria Island, Lagos' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wide text-text-secondary mb-0.5">{label}</p>
                    <p className="font-body font-medium text-text-primary">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-md h-56 bg-gray-100 flex items-center justify-center">
              <p className="text-text-secondary font-body text-sm">Map embed goes here</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white card-soft p-8">
            <h3 className="font-heading text-2xl font-semibold text-text-primary mb-6">Send a Message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button onClick={handleSubmit} className="btn-primary w-full">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
