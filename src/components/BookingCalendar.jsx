import React, { useState } from 'react'

const getMonthMatrix = (year, month) => {
  const matrix = []
  const firstDay = new Date(year, month, 1)
  const startDay = firstDay.getDay()
  let dayCounter = 1 - startDay

  for (let week = 0; week < 6; week++) {
    const row = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(year, month, dayCounter)
      row.push({
        label: date.getDate(),
        date: date.toISOString().split('T')[0],
        inCurrentMonth: date.getMonth() === month,
      })
      dayCounter++
    }
    matrix.push(row)
  }
  return matrix
}

const BookingCalendar = ({ bookedSlots = {}, onBook, onRemove }) => {
  const today = new Date()
  const [month, setMonth] = useState(today.getMonth())
  const [year, setYear] = useState(today.getFullYear())
  const weeks = getMonthMatrix(year, month)
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const handleDateClick = (day) => {
    if (day.inCurrentMonth) onBook({ date: day.date })
  }

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  return (
    <div className="pt-8 max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-500 hover:text-pink-500 text-2xl">‹</button>
        <h2 className="text-2xl font-bold text-gray-800">
          {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button onClick={handleNextMonth} className="text-gray-500 hover:text-pink-500 text-2xl">›</button>
      </div>

      <div className="grid grid-cols-7 border-t border-l text-center">
        {weekdays.map((day, i) => (
          <div key={i} className="border-b border-r p-2 text-sm font-semibold bg-gray-50 text-gray-700">{day}</div>
        ))}

        {weeks.map((week, wi) =>
          week.map((day, di) => {
            const dayBookings = bookedSlots[day.date] || []
            const isBooked = dayBookings.length > 0
            const isToday = new Date(day.date).toDateString() === new Date().toDateString()

            return (
              <div
                key={`${wi}-${di}`}
                onClick={() => handleDateClick(day)}
                className={`relative border-b border-r p-2 h-28 text-left text-xs overflow-auto cursor-pointer transition-all duration-200
                  ${day.inCurrentMonth
                    ? isBooked
                      ? 'bg-red-100 text-red-800'
                      : 'bg-white hover:bg-pink-50 hover:scale-[1.01]'
                    : 'bg-gray-50 text-gray-300 cursor-default'}
                  ${isToday ? 'ring-2 ring-pink-400' : ''}
                `}
              >
                <div className="font-medium mb-1">{day.label}</div>
                {isBooked && (
                  <ul className="space-y-1">
                    {dayBookings.map((entry, idx) => (
                      <li
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation()
                          if (window.confirm(`Remove booking at ${entry.time}?`)) {
                            onRemove(day.date, entry.time)
                          }
                        }}
                        className="cursor-pointer group hover:underline"
                      >
                        <span className="font-semibold">{entry.time}</span>
                        <div className="text-[11px] italic text-gray-600 truncate">{entry.service || 'Service'}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default BookingCalendar
