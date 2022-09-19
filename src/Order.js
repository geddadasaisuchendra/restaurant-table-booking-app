import React from 'react'
import {connect} from 'react-redux';
import Header from './home_container/Header';

const Order = ({order}) => {
  return (
    <div>
      <Header/>
      <center>
      {order.length>0?
    <div className='container'>
    <div className='row'>
      { 
        order.map((item)=> (
            <div className=' col-md-6 col-lg-4 mb-5' key={item.id} style={{padding:"5px"}}>  
           <div className='card' style={{width:"18rem",padding:"3px"}}>
            <img src={item.url} className='card-img-top' alt="hi"/>
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <div className='card-text'>
                Billed Amount : {item.prize}
              </div>
              <div> table number: {item.tablenumber}</div>
            </div>
            </div>
            </div>   
        ))}
    </div>
    </div>
    :<div className='h4'>order is not placed yet</div>
}
    </center>

    </div>
  )
}

const mapStateTOProps= state =>({
     order:state.orderreducer
})

export default connect(mapStateTOProps)(Order)
