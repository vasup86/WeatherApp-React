import React from 'react';

export default function Navbar(props){

    function loc(){
        props.changeLocation(prevState => {
            //change location state if not same as prev
            const search = document.getElementById("locationInput").value;
            if(search === ''){
                return prevState;
            }
            if (search != prevState){
                return search;
            }else{
                return prevState;
            }
        });        
    }
    return(
        <nav className="navbar">
            <div className="title">
                <h1 className="ID">Weather App,</h1>
            </div>
            <div className="navbar-search">
                <input id = "locationInput" type="text" />
                <button onClick={loc}>Search</button>
            </div>
        </nav>
    )
}