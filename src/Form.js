import React,{useState} from 'react';


const Form = () => {
    const [Name,setName] = useState(" ");
    const [FullName,setFName] = useState(" ");
    const [lName,setlName] = useState(" ");
    const [lastName,setlastName] = useState(" ");
    
    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    const inputEvent2=(event)=>{
        setlName(event.target.value);
    }
    const Fname=(event)=>{
        event.preventDefault();
        setFName(Name);
        setlastName(lName);
    }


    return (
        <div>
        <form onSubmit={Fname}>
        <div className='input'>
            <h1>Hello {FullName} {lastName}</h1>
            <input type="text" placeholder='Enter your name' onChange={inputEvent} value={Name}/>
            <br/>
            <input type="text" placeholder='Enter your Password' onChange={inputEvent2} value={lName}/>
            <button type="submit">click</button>
        </div>
        </form>
        </div>
    );
}

export default Form;

