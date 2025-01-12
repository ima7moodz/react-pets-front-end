import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../globals"

const BookedClass = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token")
      try {
        const response = await fetch(BASE_URL.BOOKINGS, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await response.json()
        setBookings(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBookings()
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Booked Classes</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.class_id.title} - {booking.booking_date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookedClass
