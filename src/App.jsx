import React, { useState } from 'react';
// import sdata from './Sdata';
// import Card from './Card';
import Todolist from './Todolist';


const App = () => {
   const [Inputlist, setInputlist] = useState("");
   const [items, setitems] = useState([]);

   const itemevent = (event)=>{
       const check = event.target.value;
       if (check !== ""){
        setInputlist(check)
       }
       else{
        setInputlist("Empty")
       }
    
   }
    const listOfItems=()=>{
        setitems((olditems)=>{
            return [...olditems,Inputlist];
        });
        setInputlist("")
        
    }

    const DeleteItems=(id)=>{
        setitems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
return index !== id;
            })
        })
    }
    return(<>
    <div className='Maindiv'>
        <div className='Centerdiv'>
            <h1> To Do List </h1>
            <br/>
            <input type="text" placeholder="Add an item" onChange={itemevent} value={Inputlist} required/>
            <button onClick={listOfItems}> + </button>
            <br/>
            <div className='Listbox'>
            <ol>
            
              {
                    items.map((Initval,index)=>{
                       return <Todolist 
                       key={index}
                       id={index}
                       text={Initval}
                       onSelect={DeleteItems}/>;
                    })
              }
            </ol>
            </div>
        </div>
    </div>

    </>);
}

export default App;