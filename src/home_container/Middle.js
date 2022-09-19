import React,{useState} from 'react'
import {connect} from "react-redux";
import { settablenumber } from '../action';

const Middle = ({tablenumber,settablenumber}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    // const [number,setNumber]=useState(null);
    const inActive='btn btn-outline-primary m-2';
    const Active='btn btn-outline-primary m-2 active'
  return (
      <div>
      <center className="mt-2">
      <h4>Please Select Table Number : </h4>
      {
        numbers.map((num,index)=>(
          <div style={{display:'inline'}} key={index}>
          <button className={tablenumber==num?Active:inActive} onClick={()=>settablenumber(num)}>{num}</button>
          </div>
        ))
      }
      </center>
      </div>
    
  )
}

const mapStateToProps= state =>({
     tablenumber:state.tablereducer.tablenumber
})

export default connect(mapStateToProps,{settablenumber})(Middle)
