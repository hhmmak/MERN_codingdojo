import {useState} from 'react';
// import React from 'react';


const PersonCard = (props) => {

    const {firstName, lastName, age, hairColor} = props;
    const [ageFinal, setAgeFinal] = useState(age);
    // console.log("running PersonCard");
    return (
        <div className='nameCard'>
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {ageFinal}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={(event) => setAgeFinal(Number(ageFinal) + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
};

export default PersonCard;