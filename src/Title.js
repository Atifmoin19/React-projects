import React from 'react';
import './Style.css';

let currDate= new Date();
currDate = currDate.getHours();
console.log(currDate);
let greeting = " ";
const cssStyle = {};
if(currDate >=6 && currDate <12){
   greeting = "Good Morning";
    cssStyle.color = 'green';
}
else if(currDate >=12 && currDate <18){
    greeting = "Good Afternoon";
    cssStyle.color = 'blue';
 }
 else if(currDate >=18 && currDate <20){
    greeting = "Good evening";
    cssStyle.color = 'red';
 }
 else{
    greeting = "Good Night";
    cssStyle.color = 'yellow';
 }

const Title = () => {
    return (
        <>
        <div className='title'>
        <h4 style={cssStyle}>{greeting}</h4>

            <h1>Movies of the year</h1>
        </div>
        </>
    );
};


export default Title;
