import React from "react";
import { connect } from "react-redux";
import Card from "./Card"

function cadastro(titulo, nome){
    cadastro.titulo = "titulo"
    cadastro.nome = "nome"
    return titulo, nome  
}

function propiedade(props){
    const { num } = props
    
    return (
        
        <Card title = "Qual é sua nota?" blue>
            <div>
                <span>
                    <span>Marcelo Luiz Siqueira Reis sua nota é: </span>
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

