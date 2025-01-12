import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../globals"
import ClassCard from "./ClassCard"

const Class = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(BASE_URL.CLASSES)
        const data = await response.json()
        setClasses(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClasses()
  }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Classes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {classes.map((classData) => (
          <ClassCard key={classData._id} classData={classData} />
        ))}
      </div>
    </div>
  )
}

export default Class
