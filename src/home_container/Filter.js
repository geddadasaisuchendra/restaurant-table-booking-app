import React from 'react'
import { connect} from 'react-redux';
import { setfilter } from '../action';

const Filter = ({filteritem,setfilter}) => {
    const items=["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"];
    // const [prod,setProd]=useState("All Items");

  return (
    <div>
        <center className="mt-2">
            <span className='h4'>Filter : </span>&nbsp;
      <select name="filter" onChange={(e)=>setfilter(e.target.value)}>
        {
            items.map((item,index)=>(
                <option key={index} className='p-2'>{item}</option>
            ))
        }
      </select>
      {/* <button className='btn btn-primary m-2' onClick={()=>console.log(filteritem)}>Submit</button> */}
      </center>
    </div>
  )
}

const mapStateTOProps= state =>(
  {
    filteritem:state.filterreducer.items
  }
)
export default connect(mapStateTOProps,{setfilter})(Filter)
