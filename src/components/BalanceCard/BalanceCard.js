import React from 'react'
import "./BalanceCard.css"
import redArrow from "../../images/red_arrow.png"
import greenArrow from "../../images/green_arrow.png"

const BalanceCard = () => {
  return (
    <div className="balance_card">
      <p className='card_name'>Gaurav Parulekar</p>
      <div className="card_balance">
        <p className="total_card_balnce">Total Balance</p>
        <p className="card_balance_currency">Rs. 5000</p>
      </div>
      <div className="card_stats">
        <div className="income">
          <img className='income_image' src={greenArrow} alt="Income" />
          <div className="income_desc">
            <p className="income_text">INCOME</p>
            <p className="income_value">8000</p>
          </div>
        </div>
        <div className="income">
          <img className='income_image' src={redArrow} alt="Income" />
          <div className="income_desc">
            <p className="income_text">EXPENSE</p>
            <p className="income_value">2000</p>
          </div>
        </div>
        <div className="expense"></div>
      </div>
    </div>
  )
}

export default BalanceCard