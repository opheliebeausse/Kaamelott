import React from "react";
import Quote from "./Quote"

const QuoteList = ({quotes}) => {
    return (

<div className="QuoteList">
{quotes.map((element, index) => (
    <Quote 
    key = {index}
    citation = {element.citation}
    personnage = {element.infos.personnage}
    episode = {element.infos.episode}
    />
))}


</div>

    )
}
export default QuoteList