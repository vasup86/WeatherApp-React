import React from 'react';
import Card from './cards.js';

export default function DisplayCards(){
    let cardType = []
    const [cards, setCards] = React.useState();
    function checkCard(number, suit){
        for(let i=0; i<cardType.length; i++){
            if(cardType[i].number === number && cardType[i].suit === suit){
                return true;
            }
        }
        return false;
    }
    function type(){
        let Number = Math.floor(Math.random() * (13 - 1 + 1) ) + 1;
        let Suit = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
        if(Number === Suit || checkCard(Number,Suit)){
            do{
                Number = Math.floor(Math.random() * (13 - 1 + 1) ) + 1;
                Suit = Math.floor(Math.random() * (4 - 1 + 1) ) + 1;
            }while (Number === Suit || checkCard(Number,Suit))
        }
        console.log(Number)
        const c = {
            number: Number,
            suit: Suit
        }
        cardType.push(c)
        return (c)
    }

    function renderCards(){
       
    }
    return (
        <div className="display-cards" >
            {renderCards()}
        </div>
    )
}