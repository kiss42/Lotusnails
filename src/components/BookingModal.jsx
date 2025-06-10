import React, { useState } from 'react'
import { format } from 'date-fns'

const timeSlots = [
  '09:00 AM','09:30 AM','10:00 AM','10:30 AM',
  '11:00 AM','11:30 AM','12:00 PM','12:30 PM',
  '01:00 PM','01:30 PM','02:00 PM','02:30 PM',
  '03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:00 PM'
]

const BookingModal = ({ date, bookedTimes, onClose, onConfirm, service }) => {
  const [selectedTime, setSelectedTime] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [closing, setClosing] = useState(false)
  const [confirmSuccess, setConfirmSuccess] = useState(false)

  const handleConfirm = () => {
    if (!selectedTime || !name.trim() || !phone.trim() || !agree) {
      alert('Please complete all fields and accept the cancellation policy.')
      return
    }
    setConfirmSuccess(true)
    setTimeout(() => {
      onConfirm(selectedTime, name, phone, service)
      setConfirmSuccess(false)
      setClosing(true)
      setTimeout(onClose, 300)
    }, 1000)
  }

  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 300)
  }

  const handlePhoneInput = (e) => {
    const digits = e.target.value.replace(/\D/g, '')
    let formatted = digits
    if (digits.length > 3 && digits.length <= 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
    setPhone(formatted)
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className={`bg-white p-6 rounded-lg w-full max-w-md shadow-xl transition-all duration-300 ${closing ? 'animate-out' : 'animate-in'}`}>
        <h2 className="text-xl font-semibold text-pink-600 mb-2">
          {format(new Date(date), 'MMMM d, yyyy')}
        </h2>

        {service && (
          <p className="text-gray-600 text-sm italic mb-2">
            Booking for: <span className="font-semibold text-pink-500">{service}</span>
          </p>
        )}

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-2 text-sm"
        />

        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={handlePhoneInput}
          maxLength={14}
          className="w-full border rounded px-3 py-2 mb-4 text-sm"
        />

        <p className="text-gray-700 mb-2">Select a time slot:</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {timeSlots.map((time) => {
            const disabled = bookedTimes.some(b => b.time === time)
            return (
              <button
                key={time}
                onClick={() => !disabled && setSelectedTime(time)}
                disabled={disabled}
                className={`py-2 px-3 text-sm rounded border transition-all ${
                  selectedTime === time ? 'bg-pink-500 text-white' : disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                }`}
              >
                {time}
              </button>
            )
          })}
        </div>

        <label className="flex items-center text-sm text-gray-700 mb-4">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mr-2"
          />
          I acknowledge & accept the <a href="#" className="text-pink-500 underline ml-1">Cancellation Policy</a>
        </label>

        {confirmSuccess && (
          <div className="flex justify-center items-center py-4">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl animate-bounce">
              ✓
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
