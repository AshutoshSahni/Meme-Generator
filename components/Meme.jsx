import React from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImg : "http://i.imgflip.com/1bij.jpg"
    });

    const [allMeme, setAllMeme] = React.useState([])


    // api call to memes data
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMeme(data.data.memes))
    }, [])

    // change image on button click
    function handleClick() {
        const randIndx = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randIndx].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg : url
        }))
    }

    // add text
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input type="text" 
                    className="input-box" 
                    placeholder="Shut up" 
                    name="topText" 
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="input-box" 
                    placeholder="and take my money" 
                    name="bottomText" 
                    onChange={handleChange} 
                    value={meme.bottomText}
                />

                <button className="form--btn" onClick={handleClick}>Get a new meme image</button>
            </div>

            <div className="meme">
                <img src={meme.randomImg} className="meme--image" />
                <h1 className="meme--text top-text">{meme.topText}</h1>
                <h1 className="meme--text bottom-text">{meme.bottomText}</h1>
            </div>
        </main>


    )
}