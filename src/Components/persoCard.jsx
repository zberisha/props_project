function Persons({ person }) {
    return (
    <div className="person-card">
        <h3>
        {person.lastName}, {person.firstName}
        </h3>
        <p>Age:{person.age}</p>
        <p>Hair color: {person.hairColor}</p>
    </div>
    );
}
export default Persons;