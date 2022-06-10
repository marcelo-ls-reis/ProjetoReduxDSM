import React from "react";
import { connect } from "react-redux";
import Card from "./Card"

function recesso(props){
    const { num } = props

    return (
        <Card title="Está chegando!!" green>
            <div>
                <span>
                    <span>Estarei de recesso em </span>
                    <strong>{ num + 10 }</strong>
                    <span> dias </span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        num: state.numeros.num,
       
    }
}
export default connect(mapStateToProps)(recesso)