import React from 'react'

const Filters = () => {
  return (
    <div className='filter-items'>
        <span className='filter-header'>FILTER</span>
        <div className='cost-filter'>
        <span className='cost-text'>Cost</span>
        <div className='cost-filter-items'>
        <label className="container">
        <input type="checkbox"/>Less than ₹1500
        </label>

        <label className="container">
        <input type="checkbox" />₹1501 - ₹4000
        </label>

        <label className="container">
        <input type="checkbox" />₹4001 - ₹7000
        </label>

        <label className="container">
        <input type="checkbox" />More than ₹7000
        </label>

        </div>
        </div>

        <div className='type-filter'>
        <span className='type-text'>Type</span>
        <div className='type-filter-items'>
        <label className="container">
        <input type="checkbox" />Sneakers
        </label>

        <label className="container">
        <input type="checkbox" />Loafers
        </label>

        <label className="container">
        <input type="checkbox" />Boot
        </label>

        </div>
        </div>

    </div>
  )
}

export default Filters