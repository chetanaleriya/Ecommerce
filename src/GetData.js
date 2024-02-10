import { useEffect, useState } from "react"
import CardData from "./CardData";
function GetData()
{
    const [data1,setData]=useState([])
   useEffect(()=>
   {
    fetch("http://localhost:4000/").then((result)=>{
        // console.log(result)
        result.json().then((data)=>
        {

         setData(data)
        })
     })
   },[])
    return(
        <div>
<CardData data1={data1}></CardData> 
</div>
    )
}
export default GetData
   
