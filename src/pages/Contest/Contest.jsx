import React from 'react'
import './Contest.css'
import Route from './components/Route'
import 'chart.js/auto';


const Contest = () => {
  const handleDataFetch = (data) => {
    console.log('Data fetched:', data);
  };

  return (
    <div className='contest'>
      <Route onDataFetch={handleDataFetch} />
    </div>
  )
}

export default Contest