import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../action';
const  Bottom = ({filteritem,tablenumber,addorder,resetfilter,resettablenumber}) => {
  const [data,setData]=useState([]);
  const [temp,setTemp]=useState([]);
  useEffect(()=>{
    fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json").then(
      response=>response.json()).then(
        json =>{
      setData(json.items);
      setTemp(json.items);
    }
      )
  },[])
  useEffect(()=>{
     if(filteritem !== "All Items"){
        let specific=temp.filter(item => item.category===filteritem);
        setData(specific);
     }
     else{
       setData(temp);
     }
  },[filteritem])

      const Handler= async (id,url,name,prize)=>{
         if(tablenumber!=null){
            await addorder(id,url,name,prize,tablenumber);
            await resetfilter();
            await resettablenumber();
            alert("Order Placed Successfully");
         }
         else{
           alert("please select table number");
         }
      }
  return (
    <div>
    <center>
      {data.length>0?
    <div className='container'>
    <div className='row'>
      { 
        data.map((item)=> (
            <div className=' col-md-6 col-lg-4 mb-5' key={item.id} style={{padding:"5px"}}>  
           <div className='card' style={{width:"18rem",padding:"3px"}}>
            <img src={item.url} className='card-img-top' alt="hi"/>
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <div className='card-text'>
                Rs.{item.prize}
              </div>
              <button className='btn btn-primary' onClick={()=> Handler(item.id,item.url,item.name,item.prize)}>Order</button>
            </div>
            </div>
            </div>   
        ))}
    </div>
    </div>
    :<div className='spinner-border text-primary'></div>
}
    </center>
    </div>

  )
}

const mapStateTOProps= state =>(
  {
    filteritem:state.filterreducer.items,
    tablenumber:state.tablereducer.tablenumber
  }
)
export default connect(mapStateTOProps,{addorder,resetfilter,resettablenumber})(Bottom)
