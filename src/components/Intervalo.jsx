import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import {connect} from 'react-redux'

export default props => {

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Mínimo:</span>
                    <input type="number" value={1} />
                </span>
                <span>
                    <span>Máximo:</span>
                    <input type="number" value={50} />
                </span>
            </div>
        </Card>
    )
}