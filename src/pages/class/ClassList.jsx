import React, { useEffect, useState } from "react"
import { getClasses } from "../../services/classService"
import ClassCard from "./ClassCard"

const ClassList = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses()
        setClasses(response)
      } catch (error) {
        console.error("Error fetching classes:", error)
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

export default ClassList
