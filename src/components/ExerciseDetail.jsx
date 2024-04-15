import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { backData } from '../mockData/backData'
import ExerciseVideo from './ExerciseVideo'
import gym from '../images/gym.png'
import yoga from '../images/yoga-pose.png'
import woman from '../images/woman.png'
import women from '../images/women.png'

export default function ExerciseDetail() {
    const params = useParams()

    const [exerciseDetail, setExercsieDetail] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // const exerciseByID = () => {
    //     return backData.filter((exercise) => exercise.id === params.id)
    // }
    // useEffect(() => {
    //     setExercsieDetail(exerciseByID()[0])
    // },[])

    console.log(params.id)


    //     useEffect(() => {
    //     if (!params) {
    //         return; 
    //     }
    
    //     setIsLoading(true);
    
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`, {
    //                 headers: {
    //                     'X-RapidAPI-Key': 'f892ffe4e6mshedbbb9318b7f31fp198fbbjsneaa2c91db688',
    //                     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //                 }
    //             });
    
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
                
    //         const data = await response.json();
    //         setExercsieDetail(data);
    //         setIsLoading(false); 
    //         } catch (error) {
    //             console.error(error);
    //         } finally {
    //              setIsLoading(false);
    //         }
    //     };
    
    //     fetchData();
    // }, [params])

    if (!params) {
        return null
    }

    if (isLoading) {
        return <div className='mt-3 mx-auto'>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }





    return (
        <div className='mx-2'>
            {exerciseDetail ? (
                <div>
                    <Link to="/workout" className="text-yellow-500 mb-4 block mt-2">&larr; Back to Workout</Link>
                    <div className='lg:flex justify-center lg:mt-10'>
                        <img src={exerciseDetail.gifUrl} className="sm:w-4/5 lg:w-2/5 mr-10"></img>
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
        </div>
    )
}