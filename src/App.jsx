import { Route, Routes } from "react-router-dom"
import "./App.css"
import { useEffect, useState } from "react"
import NavBar from "./components/Nav"
import Home from "./pages/Home"
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import Class from "./pages/class/Class"
import BookedClass from "./pages/booking/BookedClass"
import ClassList from "./pages/class/ClassList"
import BookingClass from "./pages/booking/BookingClass"
import AddClass from "./pages/class/AddClass"

import { getProfile } from "./services/userService"

const App = () => {
  const [user, setUser] = useState(null)

  const getUserProfile = async () => {
    try {
      const data = await getProfile()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }

  const logOut = () => {
    localStorage.removeItem("authToken")
    setUser(null)
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const [classes, setClasses] = useState([])

  return (
    <>
      <header>
        <NavBar logOut={logOut} user={user} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth/signup"
            element={<Signup getUserProfile={getUserProfile} />}
          />
          <Route
            path="/auth/signin"
            element={<Signin getUserProfile={getUserProfile} />}
          />
          <Route path="/class" element={<Class user={user} />} />
          <Route
            path="/class/add"
            element={<AddClass classes={classes} setClasses={setClasses} />}
          />
          <Route path="/booked" element={<BookedClass user={user} />} />
          <Route path="/class/:id/book" element={<BookingClass />} />
          <Route path="/class/classList" element={<ClassList />} />
        </Routes>
      </main>
    </>
  )
}

export default App
