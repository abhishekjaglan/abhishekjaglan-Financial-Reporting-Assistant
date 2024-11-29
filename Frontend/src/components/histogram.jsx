import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Histogram = () => {
  const [histogramData, setHistogramData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Job ID Frequency',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jobid'); // Adjust the API endpoint as needed
        const data = response.data;
        const processedData = processDataForHistogram(data);
        setHistogramData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 20 * 60 * 1000);

    return () => clearInterval(interval);

  }, []);

  const processDataForHistogram = (data) => {
    // Calculate frequency of each distinct job_id
    const frequencyMap = data.reduce((acc, item) => {
      acc[item.job_id] = (acc[item.job_id] || 0) + 1;
      return acc;
    }, {});

    // Convert frequency map to data format expected by Chart.js
    const labels = Object.keys(frequencyMap);
    const frequencies = Object.values(frequencyMap);
    // Generate unique colors for each job_id
    const colors = Object.keys(frequencyMap).map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`);

    return {
      labels: labels,
      datasets: [
        {
          label: 'Job ID Frequency',
          data: frequencies,
          backgroundColor: colors, // Assign generated colors to bars
          borderColor: colors.map(color => color.replace('0.2', '1')), // Use the same colors but with full opacity for borders
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div style={{ width: '650px', height: '450px', backgroundColor: 'transparent' }} className="flex flex-col justify-center items-center w-1/3 bg-green-800">
      <Bar
        data={histogramData}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              barPercentage: 1, // Adjusts the width of the bars
              categoryPercentage: 0.9, // Adjusts the spacing between bars
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Frequency Of Total Jobs', // Y-axis label
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                // Customize the tooltip title
                title: function (tooltipItems) {
                  // Assuming the label for each bar is the job_id
                  return `Job ID: ${tooltipItems[0].label}`;
                },
                // Customize the tooltip label
                label: function (context) {
                  // Display additional information such as the frequency
                  return `Frequency: ${context.raw}`;
                }
              }
            }
          }
        }}
      />
    </div>
  );
}

export default Histogram;