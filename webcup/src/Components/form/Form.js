import React from 'react';
import {useState} from 'react'
import "./Form.css"

export default function Form() {
	const options = ['Dream', 'Nightmare']
	const [type, setType] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [Dream, setDream] = useState('');
	const [Info, setInfo] = useState('');
	
    const onOptionChangeHandler = (event) => {
		event.preventDefault();
		setType(event.target.value)
    }
	const handleSubmit = (event) => {
		event.preventDefault();
		
		setInfo(`${firstName}/${lastName}/${age}/${type}/${Dream} `)
		console.log("Use", Info)
		console.log("Use", Info)
		setFirstName('');
		setLastName('');
		setAge('');
		setDream('');
  };
  
  
    return (
	<div className='Form'>
		<select onChange={onOptionChangeHandler}>
  
  		{options.map((option, index) => {
	  		return <option key={index} >
		  		{option}
	  </option>
  		})}
	</select>

	    <form onSubmit={handleSubmit}>
  			<label>
    		first name:<br />
    		<input type="text" id="firstName" name="firstName" value={firstName} placeholder="First Name" onChange={(event) => setFirstName(event.target.value)}/>
			</label>
		<br />
		<br />
		<label>
    		Last name:<br />
    		<input type="text" id="lastName" name="lastName" value={lastName} placeholder="last Name" onChange={(event) => setLastName(event.target.value)}/>
		</label>
		<br />
		<br />
		<label>
    		age:<br />
    		<input type="text" id="age" name="age" value={age} placeholder="age" onChange={(event) => setAge(event.target.value)}/>
		</label>
		<br />
		<br />
		<label>

    		Description:<br />
    		<input type="text" id="dream" name="dream" value={Dream} placeholder="dream" onChange={(event) => setDream(event.target.value)}/>
		</label>
		<br />
		<br />
		<input className='Submit'  type="submit" value="Submit" />
		</form>
		<h1>{Info}</h1>
	</div>
    )
}
