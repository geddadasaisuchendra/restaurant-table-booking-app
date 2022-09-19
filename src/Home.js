import React from 'react'
import Header from './home_container/Header'
import Bottom from './home_container/Bottom'
import Middle from './home_container/Middle'
import Filter from './home_container/Filter'

const Home = () => {
  return (
    <div>
      <Header/>
      <Middle/>
      <Filter/>
      <Bottom/>
      
    </div>
  )
}

export default Home
