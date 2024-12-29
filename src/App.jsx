import './App.css'


function Persons({ person }) {
  return (
      <div className="person-card">
          <h3>{person.lastName}, {person.firstName}</h3>
          <p>Age:{person.age}</p>
          <p>Hair color: {person.hairColor}</p>
      </div>
  );
}

function App() {
  const value1 = {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 45,
      hairColor: 'Black'
  };
  const value2 = {
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown'
  };
  const value3 = {
      firstName: 'Millard',
      lastName: 'Fillmore',
      age: 50,
      hairColor: 'Brown'
  };

  const value4 = {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 62,
    hairColor: 'Brown'
};

  return (
      <div className="App">
          <Persons person={value1} />
          <Persons person={value2} />
          <Persons person={value3} />
      </div>
  );
}


export default App
