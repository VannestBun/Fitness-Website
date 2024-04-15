import React from 'react'
import Home from "./components/Home"
import WorkoutPage from "./components/WorkoutPlan"
import Question from "./components/Question"
import ExerciseDetail from "./components/ExerciseDetail"
import SupplemntaryDetail from "./components/SupplementaryDetail"
import CardioDetail from "./components/CardioDetail"
import Layout from "./layout-components/Layout"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"



function App() {

  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "",
        gender:"",
        primarygoal:"",
        focusBodyPart: "",
        // equipment: "",
        fitnessLevel:"",
        isCardio: 'true',
        isAbs: 'true'
    }
)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="question" element={<Question formData={formData} setFormData={setFormData} />} />
            <Route path="workout" element={<WorkoutPage formData={formData} />} />
            <Route path="/workout/:id" element={<ExerciseDetail />} />
            <Route path="/workout/SupplemntaryDetail/:id" element={<SupplemntaryDetail />} />
            <Route path="/workout/CardioDetail/:id" element={<CardioDetail />} />
          </Route>
      </Routes>
  </BrowserRouter>

  )
}

export default App

