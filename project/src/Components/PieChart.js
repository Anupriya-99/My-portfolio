import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  // Sample data for the pie chart
  const chartData = {
    series: [485 , 500 , 350 ],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Laptop', 'Mobiles', 'Home Appliances'],
    },
  };

  return (
    <div>
      <h1>Statistics</h1>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="500"
      />
    </div>
  );
};

export default PieChart;