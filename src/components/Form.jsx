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

    function handleChange(event){
        const{name, value} = event.target
        setMeme(prev=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main>
            <form action="" className='form'>
                <input className='input first' placeholder='Top text' type="text" name='topText' onChange= {handleChange} value={memeImage.topText}/>
                <input className='input second' placeholder='Bottom text' type="text" name='bottomText' onChange= {handleChange} value={memeImage.bottomText}/>
                <input className='btn' onClick={generateMeme}type="button" value="Get a new meme image "/>
            </form>

            <div className="meme">
                <img src={memeImage.randomImage} alt="meme" />
                <h2 className='top text'>{memeImage.topText}</h2>
                <h2 className='bottom text'>{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}