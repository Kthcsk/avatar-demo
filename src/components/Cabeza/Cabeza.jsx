import React, { Component } from 'react'
import Ojos from "./Ojos/Ojos";
import Nariz from "./Nariz/Nariz";
import Boca from "./Boca/Boca";


export class Cabeza extends Component {
    render() {
        return (
            <div>
                <Ojos/>
                <Nariz/>
                <Boca/>
            </div>
        )
    }
}

export default Cabeza
