import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

// Services
export const getServices = async () => {
  const { data } = await api.get('/services');
  return data;
};

export const getServiceById = async (id) => {
  const { data } = await api.get(`/services/${id}`);
  return data;
};

// Bookings
export const createBooking = async (bookingData) => {
  const { data } = await api.post('/bookings', bookingData);
  return data;
};

export const getBookings = async () => {
  const { data } = await api.get('/bookings');
  return data;
};

export const updateBookingStatus = async (id, status) => {
  const { data } = await api.patch(`/bookings/${id}`, { status });
  return data;
};

export default api;
