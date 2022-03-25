import React,{useState,useEffect} from "react";
import axios from 'axios'

  export const  Post=()=> {
    
 const [appState, setAppState] = useState();

 useEffect(()=>{
 const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);
  
 console.log(appState);

  return (
  <>
  <h1>sadsd</h1>
  
  </>
  )
}
// ex