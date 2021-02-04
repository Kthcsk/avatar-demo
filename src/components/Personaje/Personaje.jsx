import React, { Component } from 'react'
import './personaje.css';
import persona from '../../assets/img/persona/persona-desnuda.png'
import Cabeza from "../Cabeza/Cabeza";
import Tronco from "../Tronco/Tronco";
import Piernas from "../Piernas/Piernas";

export class Personaje extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <img src={persona} alt="Personaje"/>
                <div className="caracteristicas">
                    <Cabeza/>
                    <Tronco/>
                    <Piernas/>    
                </div>
            </div>
        )
    }
}

export default Personaje
