import React from "react"
import Navbar from "./components/Navbar.js"
import Body from "./components/body.js"
import "../src/style.css";

export default function App(){
    const [location,setLocation] = React.useState('');
    let a = location;
    return (
        <div className="page">
            <Navbar changeLocation={setLocation}/>
            <Body Location={location}/>
        </div>
    )
}