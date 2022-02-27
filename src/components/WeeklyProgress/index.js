import { Card } from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
            display:false,
            position: 'top',
      },
      title: {
            display: false,
            text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 13, 14, 23,10,40,30],
        borderColor: '#B4CFB0',
        backgroundColor: '#B4CFB0',
        fill: 'start'
      },
    ],
  };

const WeeklyProgress = () =>{
    return(
        <Card title="Weekly Progress">
            <Line options={options} data={data} />
        </Card>
    )
}
export default WeeklyProgress;