import React, { useEffect, useState, useContext } from 'react'
import { BookingContext } from '../context/BookingContext'

const LOCAL_STORAGE_KEY = 'lotus_appointments'

const generateICS = (bookings) => {
  const formatDateTime = (dateStr, timeStr) => {
    const [hour, minute, modifier] = timeStr.match(/\d+|\w+/g)
    const hours = parseInt(hour) + (modifier === 'PM' && hour !== '12' ? 12 : 0)
    const date = new Date(`${dateStr}T${String(hours).padStart(2, '0')}:${minute}:00`)
    return date.toISOString().replace(/[-:]|\.\d{3}/g, '')
  }

  return `BEGIN:VCALENDAR\nVERSION:2.0\n${
    bookings.map(({ service, time, date, name }) => {
      const start = formatDateTime(date, time)
      const end = formatDateTime(date, time)
      return `BEGIN:VEVENT\nSUMMARY:${service}\nDTSTART:${start}\nDTEND:${end}\nDESCRIPTION:Booked by ${name}\nEND:VEVENT`
    }).join('\n')
  }\nEND:VCALENDAR`
}

const downloadICS = (content) => {
  const blob = new Blob([content], { type: 'text/calendar' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'lotus_appointments.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const AdminBookingSync = () => {
  const { setAppointments } = useContext(BookingContext)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!raw) return

    const data = JSON.parse(raw)
    const all = []

    for (const service in data) {
      for (const date in data[service]) {
        for (const b of data[service][date]) {
          all.push({ ...b, date, service })
        }
      }
    }

    setBookings(all)
    const ics = generateICS(all)
    downloadICS(ics)
  }, [])

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all bookings?')) {
      setAppointments({})
      localStorage.removeItem(LOCAL_STORAGE_KEY)
      setBookings([])
      alert('All bookings have been cleared.')
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📅 Admin Calendar Export</h2>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => downloadICS(generateICS(bookings))}
          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
        >
          Download .ics File
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Clear All Bookings
        </button>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        {bookings.length === 0 ? (
          <p className="text-gray-500 italic">No bookings found.</p>
        ) : (
          bookings.map((b, idx) => (
            <div key={idx}>
              {b.date} @ {b.time} — <span className="font-semibold">{b.service}</span> (by {b.name})
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AdminBookingSync
