import { Component } from "react";
import PersonCard from "./PersonCard/PersonCard"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persona: [{
        nombre: "Doe",
        apellido: "Jane",
        edad: 45,
        colorDePelo: "Black"
      },
      {
        nombre: "Smith",
        apellido: "John",
        edad: 20,
        colorDePelo: "Brown"
      }]
    }

  }

  incrementarEdad = (index) => {
    const newPersons = [...this.state.persona];
    newPersons[index].edad += 1;
    this.setState({ persona: newPersons });
  }
  render = () => {
    return (
      <>
        {this.state.persona.map((persona,index) => {
          return (<PersonCard
            nombre={persona.nombre}
            apellido={persona.apellido}
            edad={persona.edad}
            colorDePelo={persona.colorDePelo}
            incrementarEdad={() => this.incrementarEdad(index)}/>)
        })}

      </>
    )
  }
}
export default App