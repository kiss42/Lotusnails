
import React, { createContext, useState, useEffect } from 'react'

export const BookingContext = createContext()

const LOCAL_STORAGE_KEY = 'lotus_appointments'

export const BookingProvider = ({ children }) => {
  const [appointments, setAppointments] = useState({})

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored) {
      setAppointments(JSON.parse(stored))
    }
  }, [])

  // Persist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appointments))
  }, [appointments])

  // Admin reset function
  const clearAppointments = () => {
    setAppointments({})
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  return (
    <BookingContext.Provider
      value={{ appointments, setAppointments, clearAppointments }}
    >
      {children}
    </BookingContext.Provider>
  )
}
