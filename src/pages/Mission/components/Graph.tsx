import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import * as S from '../styles/Graph';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function Graph() {
  const data = [
    { year: '명료성', count: 100 },
    { year: '단어', count: 70 },
    { year: '언어 표현', count: 70 },
    { year: '비지니스 예절', count: 100 },
    { year: '내용 충족', count: 70 },
  ];

  const chartData = {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: '',
        data: data.map((row) => row.count),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: true,      
        },
        grid: {
          color: '#e5e5e5',   
        },
        angleLines: {
          color: 'transparent',
        },
        pointLabels: {
          font: {
            size: 10,
            weight: 500,
          },
          color: '#00b48c',
        },
      },
    },
    animation: { duration: 0 },
  };

  return (
    <S.Body>
      <div style={{ width: '100%', height: '100%' }}>
        <Radar data={chartData} options={options} />
      </div>
    </S.Body>
  );
}
