import React,{useState} from 'react';


const Namefield = () => {
    const [Name,setName] = useState(" ");
    const [FullName,setFName] = useState();
    
    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    const Fname=()=>{
        setFName(Name);
    }
    return (
        <div className='input'>
            <h1>Hello {FullName}</h1>
            <input type="text" placeholder='Enter your name' onChange={inputEvent} value={Name}/>
            <button onClick={Fname}>click</button>
        </div>
    );
}

export default Namefield;
