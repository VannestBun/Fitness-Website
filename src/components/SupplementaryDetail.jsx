import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { absData } from '../mockData/absData'
import ExerciseVideo from './ExerciseVideo'
import gym from '../images/gym.png'
import yoga from '../images/yoga-pose.png'
import woman from '../images/woman.png'
import women from '../images/women.png'

export default function ExerciseDetail() {
    const params = useParams()

    const [exerciseDetail, setExercsieDetail] = useState([])

    const exerciseByID = () => {
        return absData.filter((exercise) => exercise.id === params.id)
    }
    useEffect(() => {
        setExercsieDetail(exerciseByID()[0])
    },[])


    return (
        <>
            {exerciseDetail ? (
                <div className='mx-2'>
                    <Link to="/workout" className="text-yellow-500 mb-4 block mt-2">&larr; Back to Workout</Link>
                    <div className='lg:flex justify-center lg:mt-10'>
                        <img src={exerciseDetail.gifUrl} className="sm:w-4/5 lg:w-2/5 mr-20"></img>
                        <div className='flex flex-col justify-center text-gray-700'>
                            <h1 className="text-3xl font-bold mb-4">{exerciseDetail.name}</h1>
                            <div>
                                <h1 className="text-xl font-bold mb-4">Exercise Instructions</h1>
                                {exerciseDetail.instructions && exerciseDetail.instructions.map((instruction, index) => (
                                    <p key={index} className="text-gray-700 mb-2">
                                        <span className='font-bold'>Step {index + 1}:</span> {instruction}
                                    </p>
                        ))}
                        </div>
                        <div className='mt-10'>
                            <div className="mb-2 flex items-center gap-5"> <img className='w-20 bg-orange-300 p-2 rounded-lg' src={women} /><h2 className='text-2xl'>{exerciseDetail.target}</h2></div>
                            <div className="mb-2 flex items-center gap-5"> <img className='w-20 bg-orange-300 p-2 rounded-lg' src={yoga} /><h2 className='text-2xl'>{exerciseDetail.bodyPart}</h2></div>
                            <div className="mb-2 flex items-center gap-5"> <img className='w-20 bg-orange-300 p-2 rounded-lg' src={woman} /><h2 className='text-2xl'>{exerciseDetail.equipment}</h2></div>
                        </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <ExerciseVideo name={exerciseDetail.name} />
                    </div>
                </div>

            ): <h2>Loading...</h2>}
        </>
    )
}