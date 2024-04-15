import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

export default function Form({formData, setFormData}) {

    const navigate = useNavigate()
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        navigate("/workout")

    }
    
    return (
            <form onSubmit={handleSubmit} className="flex flex-col sm:w-1/2 mx-1 sm:mx-auto my-5 gap-2">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    required
                />
                <br />
                <label htmlFor="gender">What is your gender?</label>
                <select 
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    name="gender"
                    className="mb-10"
                    required
                >
                    <option value="">-- Choose --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label htmlFor="primarygoal">What is your primary goal?</label>
                <select 
                    id="primarygoal"
                    value={formData.primarygoal}
                    onChange={handleChange}
                    name="primarygoal"
                    className="mb-10"
                    // required
                >
                    <option value="">-- Choose --</option>
                    <option value="aesthetic">Aesthetic</option>
                    <option value="strength">Strength</option>
                    <option value="gain-muscle">Gain Muscle</option>
                    <option value="weightloss">Weightloss</option>
                </select>

                <label htmlFor="focusBodyPart">What workout do you want to focus on today?</label>
                <select 
                    id="focusBodyPart"
                    value={formData.focusBodyPart}
                    onChange={handleChange}
                    name="focusBodyPart"
                    className="mb-10"
                    // required
                >
                    <option value="">-- Choose --</option>
                    <option value="back">Back</option>
                    <option value="chest">Chest</option>
                    <option value="shoulders">Shoulders</option>
                    <option value="upper%20arms">Arms</option>
                    <option value="lower%20legs">Legs</option>
                </select>
                {/* <label htmlFor="equipment">Workout Type?</label>
                <select 
                    id="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    name="equipment"
                    className="mb-10"
                    // required
                >
                    <option value="">-- Choose --</option>
                    <option value="weighted">Gym Equipment</option>
                    <option value="bodyweight">BodyWeight</option>
                    <option value="mix">Mix</option>
                </select> */}

                <label htmlFor="fitnessLevel">What is your fitness level</label>
                <select 
                    id="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={handleChange}
                    name="fitnessLevel"
                    className="mb-10"
                    // required
                >
                    <option value="">-- Choose --</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>

                <label htmlFor="isCardio">Do you want to include cardio?</label>
                <select 
                    id="isCardio"
                    value={formData.isCardio}
                    onChange={handleChange}
                    name="isCardio"
                    className="mb-10"
                    // required
                >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <label htmlFor="isAbs">Do you want to include abs workout?</label>
                <select 
                    id="isAbs"
                    value={formData.isAbs}
                    onChange={handleChange}
                    name="isAbs"
                    className="mb-10"
                    // required
                >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button className="p-3 sm:p-5 bg-yellow-400 rounded-md">Proceed to Workout Plan</button>
            </form>
            
    )
}





// 0:"back"
// 1:"cardio"
// 2:"chest"
// 3:"lower arms"
// 4:"lower legs"
// 5:"neck"
// 6:"shoulders"
// 7:"upper arms"
// 8:"upper legs"
// 9:"waist"


// lets say user choose "back", and equipment of choice is bodyweight, I fetch a list of 40, 

// Do you have back-pain? If yes = [no deadlifts, squat]

// Do you want to include cardio?

// Do you want to train your core today?

// Strengh Level (4-5 workout) 

// Routine Focus