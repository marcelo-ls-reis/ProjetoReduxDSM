import "./Numero.css";
import React from "react";
import Card from "./Card";
import {connect} from 'react-redux'

import { alterarNumero } from '../store/actions/numeros'

function Numero(props){

    const { num}  =  props

    return (
        <Card title="DESAFIO REACT-REDUX" red>
            <Card title="Essa desafio é facil D+ Dev`s do 2º DSM!" red>
            <div className="Numero">
                <span>
                    <span>Número:</span>
                    <input type="number" value={num}
                        onChange={e => props.alterar(+e.target.value)}/>
                </span>
            </div>
            </Card>
        </Card>
    )
}

function mapDispatchToProps(dispatch){
    return {
        alterar(novoNumero){
            const action = alterarNumero(novoNumero)
            dispatch(action)
        },
    }
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numero)