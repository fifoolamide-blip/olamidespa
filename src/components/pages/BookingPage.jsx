import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { createBooking } from '../../utils/api';

const SERVICES = [
  { _id: '1', name: 'Deep Tissue Massage', duration: 60, price: 15000 },
  { _id: '2', name: 'Swedish Massage', duration: 60, price: 12000 },
  { _id: '3', name: 'Luxury Facial', duration: 45, price: 12000 },
  { _id: '4', name: 'Anti-Aging Facial', duration: 60, price: 18000 },
  { _id: '5', name: 'Body Wrap', duration: 75, price: 18000 },
];

const TIME_SLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

const STEPS = ['Service', 'Date', 'Time', 'Details', 'Confirm'];

const initForm = { service: '', date: '', time: '', name: '', email: '' };

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initForm);
  const [submitted, setSubmitted] = useState(false);

  const selectedService = SERVICES.find((s) => s._id === form.service);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    try {
      await createBooking(form);
      setSubmitted(true);
      toast.success('Booking confirmed! Check your email.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="pt-28 min-h-screen bg-secondary flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md w-full animate-fade-in">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-3">You're Booked!</h2>
          <p className="font-body text-text-secondary mb-6">
            We look forward to welcoming you, <strong>{form.name}</strong>. A confirmation has been sent to <em>{form.email}</em>.
          </p>
          <button onClick={() => { setForm(initForm); setStep(0); setSubmitted(false); }} className="btn-primary">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-secondary section-padding">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-body text-sm uppercase tracking-widest text-accent mb-2">Reserve Your Spot</p>
          <h1 className="font-heading text-4xl font-bold text-text-primary">Book an Appointment</h1>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-10">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-1 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                i < step ? 'bg-primary text-white' : i === step ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {i < step ? '✓' : i + 1}
              </div>
              <span className={`text-xs font-body hidden sm:block ${i === step ? 'text-accent font-semibold' : 'text-text-secondary'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 animate-fade-in">
          {/* Step 0: Select Service */}
          {step === 0 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6 text-text-primary">Choose a Service</h3>
              <div className="space-y-3">
                {SERVICES.map((s) => (
                  <button
                    key={s._id}
                    onClick={() => setForm({ ...form, service: s._id })}
                    className={`w-full flex justify-between items-center px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                      form.service === s._id ? 'border-accent bg-accent/5' : 'border-gray-100 hover:border-primary'
                    }`}
                  >
                    <div className="text-left">
                      <p className="font-body font-medium text-text-primary">{s.name}</p>
                      <p className="text-xs text-text-secondary">{s.duration} min</p>
                    </div>
                    <span className="font-body font-semibold text-accent">₦{s.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Choose Date */}
          {step === 1 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6 text-text-primary">Pick a Date</h3>
              <input
                type="date"
                className="w-full border-2 border-gray-100 rounded-xl px-5 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors"
                value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>
          )}

          {/* Step 2: Choose Time */}
          {step === 2 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6 text-text-primary">Pick a Time</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setForm({ ...form, time: slot })}
                    className={`py-3 rounded-xl text-sm font-body font-medium border-2 transition-all duration-200 ${
                      form.time === slot ? 'bg-accent text-white border-accent' : 'border-gray-100 text-text-secondary hover:border-primary'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Enter Details */}
          {step === 3 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6 text-text-primary">Your Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-100 rounded-xl px-5 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-100 rounded-xl px-5 py-3 font-body text-text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirm */}
          {step === 4 && (
            <div>
              <h3 className="font-heading text-xl font-semibold mb-6 text-text-primary">Confirm Booking</h3>
              <div className="bg-secondary rounded-2xl p-6 space-y-3">
                {[
                  { label: 'Service', value: selectedService?.name },
                  { label: 'Date', value: form.date },
                  { label: 'Time', value: form.time },
                  { label: 'Name', value: form.name },
                  { label: 'Email', value: form.email },
                  { label: 'Total', value: `₦${selectedService?.price.toLocaleString()}` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between font-body text-sm">
                    <span className="text-text-secondary">{label}</span>
                    <span className="font-medium text-text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 0 ? (
              <button onClick={back} className="btn-outline text-sm px-6 py-2.5">Back</button>
            ) : <div />}
            {step < STEPS.length - 1 ? (
              <button
                onClick={next}
                disabled={
                  (step === 0 && !form.service) ||
                  (step === 1 && !form.date) ||
                  (step === 2 && !form.time) ||
                  (step === 3 && (!form.name || !form.email))
                }
                className="btn-primary text-sm px-6 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Continue
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn-primary text-sm px-6 py-2.5">
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
