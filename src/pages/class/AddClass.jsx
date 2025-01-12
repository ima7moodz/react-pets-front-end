import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addClass } from "../../services/classService"

const AddClass = ({ classes, setClasses }) => {
  const initialState = {
    title: "",
    description: "",
    date_time: "",
    location: "",
    category: "",
    max_participants: 20,
  }
  const [formClass, setFormClass] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append("title", formClass.title)
      formData.append("description", formClass.description)
      formData.append("date_time", formClass.date_time)
      formData.append("location", formClass.location)
      formData.append("category", formClass.category)
      formData.append("max_participants", formClass.max_participants)

      const response = await addClass(formData)
      setClasses([...classes, response])
      setFormClass(initialState)
      navigate("/class")
    } catch (error) {
      console.error("Error adding class:", error)
    }
  }

  const handleChange = (event) => {
    setFormClass({ ...formClass, [event.target.id]: event.target.value })
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create a New Class</h1>
      <form
        onSubmit={handleSubmit}
        className="shadow p-4 bg-light rounded mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Class Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter class title"
            onChange={handleChange}
            value={formClass.title}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Class Description
          </label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Enter class description"
            onChange={handleChange}
            value={formClass.description}
            required
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date_time" className="form-label">
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="date_time"
            className="form-control"
            onChange={handleChange}
            value={formClass.date_time}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="form-control"
            placeholder="Enter class location"
            onChange={handleChange}
            value={formClass.location}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            onChange={handleChange}
            value={formClass.category}
            required
          >
            <option value="">Select a category</option>
            <option value="Yoga">Yoga</option>
            <option value="Pilates">Pilates</option>
            <option value="HIIT">HIIT</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Cardio">Cardio</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="max_participants" className="form-label">
            Max Participants
          </label>
          <input
            type="number"
            id="max_participants"
            className="form-control"
            placeholder="Enter max participants"
            onChange={handleChange}
            value={formClass.max_participants}
            required
            min="1"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Class
        </button>
      </form>
    </div>
  )
}

export default AddClass
