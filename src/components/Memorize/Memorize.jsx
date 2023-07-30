import React, { useEffect, useState } from 'react'
// import './Memorize.scss'

const Memorize = ({difficulty, handleBack}) => {

    const [images, setImages] = useState([]);
    const [shuffledImgs, setShuffledImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        init()
    }, []);

    const init = () => {
        const promise = fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
        setIsLoading(true)
        promise.then(response => {
            return response.json()
        })
        .then(data => {
            setImages(data.entries.map(item => item.fields.image.url))
            shuffleCards()
            setIsLoading(false)
        })
    }

    const shuffleCards = () => {
        const mixingCards = [...images, ...images].sort(() => 0.5 - Math.random()).map((card) => ({card, id: Math.random()}))
        setShuffledImgs(mixingCards)
    }

  return (
    <div className='memorize-comp'>
        <div className='container mx-auto bg-cover'>
            <div className='grid grid-rows-4 mt-10'>
                <div className='grid grid-cols-12 gap-8 content-center'>
                    <button className='text-xl 
                    font-bold
                    bg-transparent
                    hover:bg-violet-700 transition ease-in-out duration-300
                    text-white 
                    text-center 
                    border-2
                    col-start-5
                    col-span-2
                    rounded-full
                    border-sky-500 
                    px-10'
                    onClick={handleBack}>
                        Go Back
                    </button>
                    <button className='text-xl 
                    font-bold
                    bg-transparent
                    hover:bg-violet-700 transition ease-in-out duration-300
                    text-white 
                    text-center 
                    border-2
                    col-span-3
                    rounded-full
                    border-sky-500 
                    px-10'
                    onClick={() => shuffleCards()}>
                        Empezar otra vez
                    </button>
                </div>
            </div>
            {isLoading ?
                <div className='grid grid-cols-1 text-white text-center text-4xl'>
                    Cargando...
                </div>
                :
                <div className='grid grid-cols-10 gap-5'>
                    {shuffledImgs?.map((img) => { 
                    return <img src={img.card} className='rounded-2xl' style={{height:100, width:100, objectFit:'cover'}}/>   
                    })}
                </div>
            }
        </div>
    </div>
  )
}

export default Memorize