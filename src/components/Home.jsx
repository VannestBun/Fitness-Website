import fgImg from '../images/fitnes-ropes.jpg'
import fgImgChest from '../images/fitness-chestpress.jpg'
import fgImgMobile from '../images/fitness-profile.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth < 640)
        };
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize)
        return () => {
            window.removeEventListener('resize', checkWindowSize)
        }
    }, [])

    return (
        <div>
            <div className='relative w-full h-screen'>             
                <div className="absolute inset-0">
                    {isMobile ? (
                        <>
                        <img src={fgImgMobile} className="w-full h-full object-cover bg-zinc" alt="Background" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        </>
                    ) : (
                        <>
                            <img src={fgImgChest} className="w-full h-full object-cover" alt="Background" />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
                        </>
                    )}
                </div>
                <div className='relative flex flex-col justify-center items-start h-full text-white'>
                    <div className='md:w-1/4 ml-10 lg:w-1/2'>
                        <h1  className='text-white text-3xl md:text-5xl rounded-md font-black'>TRANSFORM YOUR SWEAT INTRO STRENGTH!</h1>
                        <div className='my-8'>
                        <h1 className='text-sm sm:text-base xl:text-xl'>
                            Personalize your fitness journey with our tailored workout plans. Whether you're a beginner or a seasoned athlete, we've got something just for you.
                        </h1>
                        </div>
                        <Link to="question" className='sm:text-1xl text-zinc-900 lg:text-2xl py-3 px-9 bg-yellow-300 hover:bg-black hover:text-yellow-300 
                        rounded-full transition duration-300 ease-in-out font-semibold'>
                            Get A Workout Plan
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
