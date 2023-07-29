import React, { useEffect, useState } from 'react'

const Memorize = ({difficulty}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        init()
    }, []);

    const init = async () => {

        //call to API
        await fetch("https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20")
        .then(response => {
                return response.json()
            })
        .then(data => {
            let tmpData = data.entries.map(item => item.fields.image.url)
        })

        shuffleCards()
    }

    const shuffleCards = () => {
        const mixingCards = [...images, ...images].sort(() => Math.random - 0.5).map((card) => ({card, id: Math.random() }))
        setImages(mixingCards)
    }

  return (
    <div className='container mx-auto bg-cover'>
        <div className='grid grid-cols-4 gap-4'>
            {images.map(img => { 
            return <img src={img.card} width="50%" height="50%" className='rounded-2xl'/>   
            })}
        </div>
    </div>
  )
}

export default Memorize