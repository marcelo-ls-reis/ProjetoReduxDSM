import React from "react";
import { connect } from "react-redux";
import Card from "./Card"

const Sorteio = (props) => {
    const { num } = props
    const aleatorio = parseInt(Math.random() * num) 

    return (
        <Card title="Sorteio de Números" red>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{ aleatorio }</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state){
    return {
        num: state.numeros.num
       
    }
}

export default connect(mapStateToProps)(Sorteio)