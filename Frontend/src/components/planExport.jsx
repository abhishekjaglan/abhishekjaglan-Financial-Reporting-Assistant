import Table from "./table";
import Topbar from "./topbar";
import axios from "axios";
import JobList from "./jobList";
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import SubTopbar from './subtopbar';

export default function PlanExport() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [chartData, setChartData] = useState(null);
    const [percentages, setPercentages] = useState([]);
    const job_id = 'PLAN_EXPORT';

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(`http://localhost:3000/api/send?job_id=${job_id}`);
                setData(response.data);
                console.log("Response.data", response.data);
                console.log("Data", data);
                setIsLoading(false);
                console.log("IsLoading", isLoading);
            } catch (error) {
                console.error("Error fetching data", error);
                setIsLoading(false);
            }
        };

        async function fetchChartData() {
            try {
                const response = await axios.get(`http://localhost:3000/api/individualstatus?job_id=${job_id}`);
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
        fetchChartData();
        const chartInterva = setInterval(fetchChartData, 20 * 60 * 1000);
        const interval = setInterval(fetchData, 20 * 60 * 1000);

        return () => {
            clearInterval(interval)
            clearInterval(chartInterva)
        };
    }, []);

    return (
        <div className="flex flex-col">
            <div>
                <Topbar />
            </div>
            <div className="bg-black text-white">
                <SubTopbar />
            </div>
            <div className="bg-[#E5EEEA] text-[#004D3C]">
                <JobList />
            </div>
            <div className="flex">
                <div className="flex justify-center items-center w-2/3">
                    <Table isLoading={isLoading} data={data} />
                </div>
                <div className="flex justify-center items-center w-1/3">
                    {chartData && (
                        <div className='flex justify-center items-center'>
                            <div className='pt-0 mt-0' style={{ width: '400px', height: '400px' }}>
                                <Pie data={chartData} />
                            </div>
                            <div className='pt-5 ml-5'>
                                {chartData.labels.map((label, index) => (
                                    <div key={label} className='text-center'>
                                        {label}: {percentages[index]}%
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}