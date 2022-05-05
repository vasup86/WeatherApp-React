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

    React.useEffect(()=>{ //in useEffect since it used document selector, the component needs to be rendered before it can be used.
        try{
            document.addEventListener("keypress",event=>{
                if(event.key === "/"){
                    event.preventDefault();
                    document.getElementById('locationInput').focus();
                }
            });
            document.getElementById('locationInput').addEventListener("keypress", event=>{
                if(event.key === 'Enter'){
                    event.preventDefault();
                    //console.log("entered")
                    loc();
                }
            });
        }catch (e){console.log(e)}
    }) //no dependency, I want it to ren everytime
        
    return(
        <nav className="navbar">
            <div className="title">
                <h1 className="ID">Weather App</h1>
            </div>
            <div className="navbar-search">
                <input id = "locationInput" placeholder="Enter city" type="text" />
                <button className="search-button"onClick={loc}>
                    <img className="search-img" src = "/img/search.png" width="20" height="20"></img>
                </button>
            </div>
        </nav>
    )
}