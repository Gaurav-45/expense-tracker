import React from 'react'
import "./Home.css"
import BalanceCard from '../BalanceCard/BalanceCard'

const Home = () => {
  return (
    <div className="home">
        <div className="home_left">
          <div className="graph"></div>
        </div>
        <div className="home_right">
            <BalanceCard/>
        </div>
    </div>
  )
}

export default Home