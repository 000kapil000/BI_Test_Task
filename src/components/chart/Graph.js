import React from 'react';
import { Bar } from 'react-chartjs-2';

const Graph = ({ data }) => {
  const chartData = {
    labels: ['Confirmed Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        label: 'COVID-19 Data',
        backgroundColor: ['blue', 'green', 'red'],
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: 1,
        hoverBackgroundColor: ['lightblue', 'lightgreen', 'lightcoral'],
        hoverBorderColor: 'rgba(0,0,0,0.8)',
        data: [data.confirmed, data.recovered, data.deaths],
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Data Graph</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Graph;


