import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { backData } from '../mockData/backData'
import { bodyWeightData } from '../mockData/bodyWeight'
import { cardioData } from '../mockData/cardioData'
import { absData } from '../mockData/absData'
import fgImgChest from '../images/fitness-chestpress.jpg'

export default function WorkoutPlan({formData}) {
    const [workoutDataBodyPart, setWorkoutDataBodyPart] = useState([])
    // const [workoutDataEquipment, setWorkoutDataEquipment] = useState([])
    const [workoutDataCardio, setWorkoutDataCardio ] = useState([])
    const [workoutDataAbs, setWorkoutDataAbs ] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
   
    useEffect(() => {
        // setWorkoutDataBodyPart(backData)
        // setWorkoutDataEquipment(bodyWeightData)
        setWorkoutDataCardio(cardioData)
        setWorkoutDataAbs(absData)
    }, [formData])

    console.log(formData)

    // useEffect(() => {
    //     if (!formData.focusBodyPart) {
    //         return; 
    //     }
    
    //     setIsLoading(true);
    
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${formData.focusBodyPart}?limit=10`, {
    //                 headers: {
    //                     'X-RapidAPI-Key': 'f892ffe4e6mshedbbb9318b7f31fp198fbbjsneaa2c91db688',
    //                     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //                 }
    //             });
    
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
                
    //         const data = await response.json();
    
    //         let numExercises = 0;
    //         switch (formData.fitnessLevel) {
    //             case 'beginner':
    //                 numExercises = 3;
    //                 break;
    //             case 'intermediate':
    //                 numExercises = 4;
    //                 break;
    //             case 'advanced':
    //                 numExercises = 5;
    //                 break;
    //             default:
    //                 numExercises = 0;
    //                 break;
    //         }
    //         const selectedExercise = data.slice(0, numExercises)
    //         setWorkoutDataBodyPart(selectedExercise);
    //         setIsLoading(false); 
    //         } catch (error) {
    //             console.error(error);
    //         } finally {
    //              setIsLoading(false);
    //         }
    //     };
    
    //     fetchData();
    // }, [formData.focusBodyPart])
    


    if (!formData.focusBodyPart) {
        return null
    }

    if (isLoading) {
        return <div className='mt-3 mx-auto'>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <br />
            <h1 className='text-center text-3xl font-bold text-gray-800 mb-4'>Workout Plan Here for {formData.gender === 'male' ? 'Mr' : 'Ms'} {formData.firstName} {formData.lastName}</h1>
                <div className='flex flex-wrap justify-center'>
                    {workoutDataBodyPart.map(exercise => (
                        <div key={exercise.id} className="flex flex-col border-2 border-gray-300 rounded-md p-4 m-2 shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-50 w-64">
                            <Link to={`/workout/${exercise.id}`}>
                                <img className='w-32 h-auto mx-auto' src={exercise.gifUrl} alt={exercise.name} />
                                <div className='flex justify-between items-center mt-2'>
                                    <h1 className="text-lg font-semibold">{exercise.name}</h1>
                                </div>
                                <div className="flex items-center mt-1 gap-3">
                                    <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{exercise.target}</span>
                                    <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{exercise.bodyPart}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            <br />
            {formData.isAbs === "true" && (
                <>
                    <h1 className='text-center text-3xl font-bold text-gray-800 mb-4'>Supplementary Workout</h1>
                    <div className='flex flex-wrap justify-center'>
                        {workoutDataAbs.map(abs => (
                            <div key={abs.id} className="flex flex-col border-2 border-gray-300 rounded-md p-4 m-2 shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-50 w-64">
                                <Link to={`/workout/SupplemntaryDetail/${abs.id}`}>
                                    <img className='w-32 h-auto mx-auto' src={abs.gifUrl} alt={abs.name} />
                                    <div className='flex justify-between items-center mt-2'>
                                        <h1 className="text-lg font-semibold">{abs.name}</h1>
                                    </div>
                                    <div className="flex items-center mt-1 gap-3">
                                        <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{abs.target}</span>
                                        <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{abs.bodyPart}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <br />
            {formData.isCardio === "true" && (
                <>
                    <h1 className='text-center text-3xl font-bold text-gray-800 mb-4'>Cardio</h1>
                    <div className='flex flex-wrap justify-center'>
                    {workoutDataCardio.map(cardio => (
                        <div key={cardio.id} className="flex flex-col border-2 border-gray-300 rounded-md p-4 m-2 shadow-md hover:shadow-lg transition duration-300 hover:bg-gray-50 w-64">
                            <Link to={`/workout/CardioDetail/${cardio.id}`}>
                                <img className='w-32 h-auto mx-auto' src={cardio.gifUrl} alt={cardio.name} />
                                <div className='flex justify-between items-center mt-2'>
                                    <h1 className="text-lg font-semibold">{cardio.name}</h1>
                                </div>
                                <div className="flex items-center mt-1 gap-3">
                                    <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{cardio.target}</span>
                                    <span className="bg-gray-200 px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-300 transition duration-300">{cardio.bodyPart}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                </>
                )}
        </div>
    )
}
