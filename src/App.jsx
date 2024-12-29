import "./App.css";
import Persons from "./Components/persoCard";
import personCard from './Components/persoCard'

<Persons/>

function App() {
    const value1 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black",
    };
    const value2 = {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown",
    };
    const value3 = {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "Brown",
    };

    const value4 = {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown",
    };

    return (
    <div className="App">
        <Persons person={value1} />
        <Persons person={value2} />
        <Persons person={value3} />
    </div>
    );
}

export default App;
