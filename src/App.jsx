
import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useState}from"react";
export default function App() {
  const[counter,setCounter]=useState(0);
  const[check,setCheck]=useState(true);

  const increment=()=>{
    setCounter(counter+1);
    setCheck(true);
  };
  const decrement=()=>{
    setCounter(counter-1);
    if(counter<=1){
      setCheck(false);
    }
  
  };
  return (
    <div>
      <Container className="mt-5 pt-5 text-center border">
        
        <h1 className="text-center">Counter App</h1>
        <h1 className="text-center">{counter}</h1>
        <Button onClick={increment} variant="success" style={{marginRight: '10px'}}>+</Button>
       { check &&( <Button onClick={decrement} variant="danger">-</Button>
        
        )}
      
        
      
      </Container>
    </div>
    
  );
};
