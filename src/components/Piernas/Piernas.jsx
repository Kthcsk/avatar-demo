import React, { Component } from 'react'
import Pantalones from "./Pantalones/Pantalones";
import Zapatos from "./Zapatos/Zapatos";

export class Piernas extends Component {
    render() {
        return (
            <div>
                <Pantalones/>
                <Zapatos/>
            </div>
        )
    }
}

export default Piernas
