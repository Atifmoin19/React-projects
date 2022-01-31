import React,{useState} from 'react';


const Form = () => {
    const [FullName,setFullName] = useState({
        fname: " ",
        lname:" ",
        email: " ",
    });
    
    
    const inputEvent=(event)=>{
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue)=>{
            if(name === 'fName'){
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                };
            }else if(name === 'lName'){
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                };
            }
            else if(name === 'eMail'){
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                };
            }
        })
    
    }

    const Fname=(event)=>{
        event.preventDefault();
        alert("Form Submitted")

    }


    return (
        <div>
        <form onSubmit={Fname}>
        <div className='input'>
            <h1>Hello {FullName.fname} {FullName.lname} </h1>
            <br/> {FullName.email}
            <input type="text" placeholder='Enter your First Name' name = "fName" onChange={inputEvent} value={FullName.fname} required/>
            <br/>
            <input type="text" placeholder='Enter your Last Name' name = "lName" onChange={inputEvent} value={FullName.lname} required/>
            <br/>
            <input type="email" placeholder='Enter your Email' name = "eMail" onChange={inputEvent} value={FullName.email} required/>
            <button type="submit">click</button>
        </div>
        </form>
        </div>
    );
}

export default Form;

