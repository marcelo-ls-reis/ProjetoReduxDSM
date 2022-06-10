import React from "react";
import { connect } from "react-redux";
import Card from "./Card"

const propiedade = (props) => {
    const { num } = props
    return (
        
        <Card title = {props.titulo} blue>
            <div>
                <span>
                    <span> {props.nome} </span>
                    <strong>{ num }</strong>
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
export default connect(mapStateToProps)(propiedade)

