import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Header = ({count}) => {
  return (
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
            <a className='navbar-brand'>RESTAURENT</a>
            <div>
            <button type="button" className='btn btn-success'><Link to="/Order" style={{textDecoration:"none",color:"white"}}>Orders</Link> : <span className='badge bg-secondary'>{count}</span></button>
            </div>
        </div>
      </nav>
  )
}

const mapStateTOProps= state =>({
     count:state.orderreducer.length
})
export default connect(mapStateTOProps)(Header)
