import React,{useState} from 'react';


const Formultimaate = () => {
    const [FullName,setFullName] = useState({
        fname:"",
        lname:"",
        email:"",
    });
    
    
    const inputEvent=(event)=>{
        const {value,name} = event.target;
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            };
            // if(name === 'fName'){
            //     return{
            //         fname:value,
            //         lname:preValue.lname,
            //         email:preValue.email,
            //     };
            // }else if(name === 'lName'){
            //     return{
            //         fname:preValue.fname,
            //         lname:value,
            //         email:preValue.email,
            //     };
            // }
            // else if(name === 'eMail'){
            //     return{
            //         fname:preValue.fname,
            //         lname:preValue.lname,
            //         email:value,
            //     };
            // }
        })
    
    }

    const Fname=(event)=>{
        event.preventDefault();
        alert(" Thanks" + FullName.fname + FullName.lname + "  For subbmitting form")

    }


    return (
        <div className='Form'>
        <form onSubmit={Fname} type="get">
        <div className='input'>
            <h1>Hello {FullName.fname} {FullName.lname} </h1>
            <br/> <h2> {FullName.email}</h2>
            
            <p/>
            <div className='inputbox'>
            <span>
            <label for="fname"> First Name </label>
            </span>
            <input type="text" placeholder='Enter your First Name' name = "fname" onChange={inputEvent} value={FullName.fname} />
            </div>
            <br/>
            <div className='inputbox'>
            <span>
            <label for="lname"> Last Name </label>

</span>            <input type="text" placeholder='Enter your Last Name' name = "lname" onChange={inputEvent} value={FullName.lname} />
            </div>
            <br/>
            <div className='inputbox'>
            <span>
            <label for="email"> Email</label>
    
    </span>        <input type="email" placeholder='Enter your Email' name = "email" onChange={inputEvent} value={FullName.email}/>
            </div>
            <br/>
            <button type="submit">click</button>
        </div>
        </form>
        </div>
    );
}

export default Formultimaate;

