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
import type { FeedbackData } from "../../../hooks/missionFeedbackApi";

interface GraphProps {
    dataProps?: FeedbackData;
  }

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export default function Graph({ dataProps }: GraphProps) {

    const splitLabel = (label: string) => {
        if (label.length <= 5) return label;
        
        const mid = Math.floor(label.length / 2);
        return [label.slice(0, mid), label.slice(mid)];
      };

    const data = dataProps?.evaluations.map((ev: { item: any; score: any; }) => ({
        year: ev.item,
        count: ev.score,
      })) || [];

  const chartData = {
    labels: data.map((row: { year: any; }) => splitLabel(row.year)),
    datasets: [
      {
        label: '',
        data: data.map((row: { count: any; }) => row.count),
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: true,
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
            size: 11,
            weight: 400,
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
