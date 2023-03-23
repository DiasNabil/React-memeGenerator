import React from 'react'
import memeData from '../memeData'
import _ from 'lodash'
import './Form.css'

export default function Form() {
    function randomMeme() {
        return allMemeImages.data.memes[_.random(0,99)].url
    } 

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    const [memeImage, setMeme]= React.useState({
        topText: '',
        bottomText: '',
        randomImage: randomMeme()
    })

    function generateMeme(){
        setMeme(prev => {
            return {
                ...prev,
                randomImage: randomMeme()
            }
        })
    }

    return (
        <main>
            <form action="" className='form'>
                <input className='input first' placeholder='Top text' type="text" />
                <input className='input second' placeholder='Bottom text' type="text" />
                <input className='btn' onClick={generateMeme}type="button" value="Get a new meme image "/>
            </form>
            <img src={memeImage.randomImage} alt="meme" />
        </main>
    )
}