import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const [chartData, setChartData] = useState(null);
  const [percentages, setPercentages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/status');
        console.log('PieChart Response:', response);
        const data = response.data;
        console.log('PieChart Data:', data);

        // Count the frequency of each label
        const frequency = data.reduce((acc, item) => {
          acc[item.status] = (acc[item.status] || 0) + 1;
          return acc;
        }, {});

        // Prepare labels and values for the chart
        const labels = Object.keys(frequency);
        const values = Object.values(frequency);
        const total = values.reduce((acc, value) => acc + value, 0);
        const calculatedPercentages = values.map(value => ((value / total) * 100).toFixed(2));

        setPercentages(calculatedPercentages);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Pie Chart',
              data: values,
              backgroundColor: [
                'rgba(0, 128, 0, 0.6)', // Even Lighter Green
                'rgba(255, 255, 0, 0.6)', // Even Lighter Yellow
                'rgba(255, 0, 0, 0.6)', // Even Lighter Red
                // Add more colors as needed
              ],
              borderWidth: 1,
            },
          ],
        });

        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 20 * 60 * 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-center items-center'>
    <div className='pt-0 mt-0' style={{ width: '400px', height: '400px' }}>
      <Pie data={chartData}/>
    </div>
    <div className='pt-5 ml-5'>
      {chartData.labels.map((label, index) => (
        <div key={label} className='text-center'>
          {label}: {percentages[index]}%
        </div>
      ))}
    </div>
  </div>
  );
}