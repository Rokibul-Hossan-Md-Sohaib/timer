import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//create a context api for multiple use this state
 const UseContext =createContext()
 export const UseContextProvider =(props) =>{
    const timeX= Timer()
    return (
        <UseContext.Provider value ={timeX}>
            {props.children}
        </UseContext.Provider>
    )

 }
 export const useProp = () => useContext(UseContext) //exporting context api using useProp name
     
 

 const Timer=()=> {
    const[time, setTime]= useState(0);  // this useState hook is use for time which default value is 0
    const[timeOn , setTimeOn]=useState(false); // this useState hook is use for start, stop which default value is false
//useEffect hook for implementing this state hook , it's a kind of life cycle method
    useEffect(() =>{
        //create a variable as null value
        let interval = null;

        // here is the condition for if start or stop click then time will be increase with milliseconds otherwise clean as null(when click reset)

        if(timeOn){
            interval =setInterval(() =>{
                setTime(previousTime =>previousTime +10)
            },10)
        }
        else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)
        
    },[timeOn])

    return (
     
        <div className="timer">
            <div>
           {/* math.floor is a method and here is minutes , second and milliseconds  implementation
           and also used  slice method which is es6 method   */}
            <span>{("0" + Math.floor((time /60000) %60)).slice(-2)}: </span>
            <span>{("0" + Math.floor((time /1000) % 60)).slice(-2)} :</span>
            <span>{("0" +((time /10) %100)).slice(-2)}</span>
            </div>
            <div>
                {/* here is setTimeOn function is used which is declared in useState and implement in useEffect */}
                <button  onClick={() => setTimeOn(true)}>Start</button>
                <button onClick={() => setTimeOn(false)}>Stop</button>
                <button  onClick={() =>  setTime(0)}>Reset</button>
                
           
            </div>
            {/* this is a link by which i can go the history page */}
            <Link to ="/history">View history</Link>
        </div>
    );
}

export default Timer;