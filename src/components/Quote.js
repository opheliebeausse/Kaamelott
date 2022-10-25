import React,{useState} from "react";


const Quote = ({citation, personnage, episode}) => {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const handleLike = () => {
        setLike (like +1)
    }

    const handleDislike = () => {
        setDislike (dislike +1)
    }

    console.log(like)

    return ( 
    <div>
<p>{citation}</p>
<p>{personnage}</p>
<p>{episode}</p>
<button onClick={handleLike}>J'aime</button>
<p>J'aime :{like}</p>
<button onClick={handleDislike}>J'aime pas</button>
<p>Je n'aime pas :{dislike}</p>

    </div>
)

}

export default Quote