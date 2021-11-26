import React from "react"
import Header from "./Header"
import Title from "./Title"
import Buttons from "./Buttons"
import Info from "./Info"
import Footer from "./Footer"

export default function Main() {
    return (
        // This component presents the centered information.
        <main>
            <Header />
            <Title />
            <Buttons />
            <Info />
            <Footer />            
        </main>
    )
}