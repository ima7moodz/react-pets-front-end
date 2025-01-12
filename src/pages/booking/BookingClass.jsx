import React, { useState } from "react"
import { bookClass } from "../../services/bookingService"

const BookingClass = ({ classId }) => {
  const [bookingStatus, setBookingStatus] = useState(null)

  const handleBookClass = async () => {
    try {
      const response = await bookClass(classId)
      setBookingStatus("Booked")
    } catch (error) {
      console.error("Error booking class:", error)
      setBookingStatus("Error")
    }
  }

  return (
    <button onClick={handleBookClass}>
      {bookingStatus || "Book this Class"}
    </button>
  )
}

export default BookingClass
