import React from 'react';
import Cards from './Cards'
import './Reports.css'

function Reports() {
  return (
    <div className='reports'data-aos="fade-up"
    data-aos-duration="1000">
      <div className="cards__header">
      
      <Cards link="https://clone-7bb36.web.app"/>
      <Cards link="https://twitter-clone-3c380.web.app"/>
      </div>
    </div>
  );
}

export default Reports;
