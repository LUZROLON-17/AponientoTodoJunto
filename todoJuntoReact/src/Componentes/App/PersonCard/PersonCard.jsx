import React, { Component } from 'react';
class PersonCard extends Component{
    constructor(props){
        super(props);
    }
    render = (props) =>{
        return(
    <>
    <h2>{ this.props.nombre}, {this.props.apellido}</h2>
    <p>Age:{this.props.edad}</p>
    <p>Hair Color: {this.props.colorDePelo} </p>
    <button onClick={this.props.incrementarEdad}> Aumentar edad</button>
    </>
    
        )
    }
    }
    export default PersonCard

