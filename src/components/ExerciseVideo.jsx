import React, { useEffect, useState } from 'react'

export default function ExerciseVideo(props) {
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (props.name) {
            setIsLoading(true)
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${props.name}`, {
                        headers: {
                            'X-RapidAPI-Key': 'f892ffe4e6mshedbbb9318b7f31fp198fbbjsneaa2c91db688',
                            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                        }
                    })
                    if (!response.ok) {
                        throw new Error('Failed to fetch data')
                    }
                    const data = await response.json()
                    setExerciseVideos(data.contents)
                } catch (error) {
                    console.error(error)
                    setError('Failed to fetch exercise videos. Please try again later.')
                } finally {
                    setIsLoading(false)
                }
            }

            fetchData()
        }
    }, [props.name])

    if (!props.name) {
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
            <h3 className='text-3xl text-center font-medium'>Watch {props.name} Exercise Videos!</h3>
            <div className='flex flex-wrap gap-6 mx-0 mt-20'>
                {exerciseVideos.slice(0, 6).map((exercise, index) => (
                    <div key={index} className='flex flex-col items-center mx-auto w-96 text-center'>
                        <a
                            href={`https://www.youtube.com/watch?v=${exercise.video.videoId}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={exercise.video.thumbnails[0].url} alt={exercise.video.title} className="w-80" />
                        </a>
                        <p className='mt-2'>{exercise.video.title}</p>
                        <p className='text-gray-500'>{exercise.video.channelName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
