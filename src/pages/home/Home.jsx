import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Navbar from '../../components/navbar/navbar.jsx';
import Widget from '../../components/widget/Widget.jsx';
import Feature from '../../components/feature/Feature.jsx';
import Chart from '../../components/charts/Chart.jsx';
import Table from '../../components/tables/Table.jsx';


const Home = () => {
  return (
    <div class="home">
      <Sidebar/>
      
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type="balance"/>
      </div>
      <div className="featuredChart">
        <Feature/>
        <Chart/>

      </div>
      <div className="listContainer">
        <div className="listTitle">
          <Table/>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Home