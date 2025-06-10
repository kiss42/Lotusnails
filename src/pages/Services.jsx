import React, { useContext, useState } from 'react'
import BookingCalendar from '../components/BookingCalendar'
import BookingModal from '../components/BookingModal'
import services from '../data/servicesData'
import { BookingContext } from '../context/BookingContext'

const Services = () => {
  const { appointments, setAppointments, clearAppointments } = useContext(BookingContext)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleBook = ({ date, time, name, phone, service }) => {
    if (!date || !time) return

    setAppointments(prev => {
      const serviceName = selectedService?.name || 'General'
      const serviceBookings = prev[serviceName] || {}
      const dayBookings = serviceBookings[date] || []

      return {
        ...prev,
        [serviceName]: {
          ...serviceBookings,
          [date]: [...dayBookings, { time, name, phone, service }],
        },
      }
    })
  }

  const handleRemove = (date, time) => {
    if (!selectedService?.name) return

    setAppointments(prev => {
      const updated = { ...prev }
      const serviceName = selectedService.name
      const serviceBookings = { ...updated[serviceName] }
      const dayBookings = (serviceBookings[date] || []).filter(b => b.time !== time)

      if (dayBookings.length === 0) {
        delete serviceBookings[date]
      } else {
        serviceBookings[date] = dayBookings
      }

      updated[serviceName] = serviceBookings
      return updated
    })
  }

  const handleClearCalendar = () => {
    const pin = prompt('Enter 4-digit admin PIN:')
    if (pin === '1234') {
      clearAppointments()
      alert('Calendar cleared.')
    } else {
      alert('Incorrect PIN.')
    }
  }

  const selectedServiceName = selectedService?.name || ''
  const selectedBookings = appointments[selectedServiceName] || {}

  const flatBookings = {}
  for (const service in appointments) {
    for (const date in appointments[service]) {
      if (!flatBookings[date]) flatBookings[date] = []
      appointments[service][date].forEach(b => {
        flatBookings[date].push({ ...b, service })
      })
    }
  }

  return (
    <div className="pt-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Book a Service</h1>
        <p className="text-gray-500 text-lg">Choose from a curated selection of premium nail services</p>
        <button
          onClick={handleClearCalendar}
          className="mt-6 text-sm bg-red-100 text-red-700 px-4 py-2 rounded-full border border-red-300 hover:bg-red-200"
        >
          Admin: Clear Calendar
        </button>
      </div>

      {!selectedService && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(service => (
            <button
              key={service.name}
              onClick={() => setSelectedService(service)}
              className="p-6 border rounded-2xl shadow-lg hover:shadow-pink-200 hover:-translate-y-1 bg-white transition-all text-left"
            >
              <h2 className="text-2xl font-bold text-pink-500 mb-1">{service.name}</h2>
              <p className="text-gray-600 text-sm">
                {service.note ? `${service.note} $${service.price}` : `$${service.price}`}
              </p>
            </button>
          ))}
        </div>
      )}

      {selectedService && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-pink-600">{selectedService.name}</h2>
            <button
              onClick={() => {
                setSelectedService(null)
                setSelectedDate(null)
              }}
              className="text-gray-500 hover:text-pink-500 text-sm underline"
            >
              Back to All Services
            </button>
          </div>

          <div id="booking-calendar">
            <BookingCalendar
              bookedSlots={flatBookings}
              onBook={({ date }) => {
                setSelectedDate(date)
                setShowModal(true)
              }}
              onRemove={handleRemove}
            />
          </div>

          {showModal && (
            <BookingModal
              date={selectedDate}
              bookedTimes={flatBookings[selectedDate] || []}
              service={selectedService.name}
              onClose={() => setShowModal(false)}
              onConfirm={(time, name, phone) => {
                handleBook({ date: selectedDate, time, name, phone, service: selectedService.name })
                setShowModal(false)
                alert(`Booked ${selectedService.name} on ${selectedDate} at ${time}`)
              }}
            />
          )}
        </div>
      )}

      {!selectedService && (
        <div className="fixed bottom-4 inset-x-4 z-50 md:hidden">
          <button
            onClick={() => {
              const calendar = document.getElementById('booking-calendar')
              if (calendar) calendar.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-full shadow-lg"
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Services
