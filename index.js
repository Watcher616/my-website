import React from "react"
import ReactDOM from "react-dom"

import Info from "./Info/Info.js"
import About from "./About/About.js"
import Interest from "./Interest/Interest.js"
import Footer from "./Footer/Footer.js"


function Homepage(){
    return (
        <div className="homepage-container">
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
        </div>
    )
}

ReactDOM.render(<Homepage/>, document.querySelector("#root"))