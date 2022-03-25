import React,{useState,} from "react";
import  {coronaArr, } from './useCorona.jsx' 

export function AbouteUs() {

  const arr = ['Armen','valod',"karen",'mark']

  const [inputVal,setinputVal] = useState('')
coronaArr(inputVal)
console.log(

coronaArr(inputVal)

);
  
  return (
    <div>
     <input  type="text" onChange={(e)=>{

          setinputVal(e.target.value)
     }} />
      {  arr.filter((val=>{

            if(inputVal===""){
              return val
            }else{

             return val.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase())

            }

        })).map((v,ind)=>{
          return <h2 key={ind}>{v}</h2>
        })       }
    </div>
  );
}
// export default AbouteUs;
