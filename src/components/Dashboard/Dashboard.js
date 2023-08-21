import React,{useState,useEffect} from 'react'
import './Dashboard.css';
import axios from 'axios';
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
// import Graph from '../chart/Graph';
// import { Bar } from 'react-chartjs-2';
const Dashboard = () => {
  const [coviddata, setcovidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://data.covid19india.org/v4/min/timeseries.min.json`);
        setcovidData(response.data);
        console.log(coviddata);
      } catch (error) {
        console.error('Error fetching COVID-19 data:', error);
      }
    };

    fetchData();
  }, []);

  // const chartData = {
  //   labels: data.map(entry => entry.date), // Array of dates
  //   datasets: [
  //     {
  //       label: 'Confirmed Cases',
  //       backgroundColor: 'blue',
  //       data: data.map(entry => entry.confirmed),
  //     },
  //     {
  //       label: 'Recovered',
  //       backgroundColor: 'green',
  //       data: data.map(entry => entry.recovered),
  //     },
  //     {
  //       label: 'Deaths',
  //       backgroundColor: 'red',
  //       data: data.map(entry => entry.deaths),
  //     },
  //   ],
  // };





  // const cfg = {
  //   type: 'bar',
  //   data: {
  //     datasets: [{
  //       data: [20, 10,30],
  //     }],
  //     labels: ['Confirmed Cases', 'Recovered', 'Deaths']
  //   }
  // }

  // const chartData = {
  //   labels: ['Confirmed Cases', 'Recovered', 'Deaths'],
  //   datasets: [
  //     {
  //       label: 'COVID-19 Data',
  //       backgroundColor: ['blue', 'green', 'red'],
  //       borderColor: 'rgba(0,0,0,0.5)',
  //       borderWidth: 1,
  //       hoverBackgroundColor: ['lightblue', 'lightgreen', 'lightcoral'],
  //       hoverBorderColor: 'rgba(0,0,0,0.8)',
  //       // data: [data.confirmed, data.recovered, data.deaths],
  //     },
  //   ],
  // };
  return (
    <div className="dashboard-container">
    <Sidebar />
    <div className="content-container">
      <Header />
      <div className="main-content">
        main content 
       <div>
       {/* <Bar
        data={cfg}
       /> */}
       </div>
    

      </div>
    </div>
  </div>
  )
}

export default Dashboard