import React from "react"

const ClassCard = ({ classData }) => {
  const { title, description, date_time, location, instructor_id } = classData

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", width: "300px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Date & Time:</strong> {new Date(date_time).toLocaleString()}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Instructor:</strong> {instructor_id?.username}
      </p>
    </div>
  )
}

export default ClassCard
