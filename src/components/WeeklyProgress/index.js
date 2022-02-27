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
    Filler,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
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
    elements: {
      line: {
        fill: true
      }
    }
  };

  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 13, 14, 23,10,40,30],
        borderColor: '#FF7878',
        backgroundColor: 'rgba(255, 120, 120,0.6)',
        fill: true,
        tension:0.1
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