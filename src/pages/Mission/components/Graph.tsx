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
  type ChartData,
} from 'chart.js';
import * as S from '../styles/Graph';

// [수정 1] 외부 import를 제거하고, 그래프에 필요한 데이터 타입을 내부에서 직접 정의합니다.
// 이렇게 하면 'FeedbackData' 타입이 어디서 왔는지 신경 쓰지 않고, 
// 구조(item, score)만 맞으면 에러 없이 작동합니다.

interface EvaluationItem {
    item: string;
    score: number;
}

interface GraphDataShape {
    evaluations: EvaluationItem[];
}

interface GraphProps {
    // [수정 2] dataProps가 위에서 정의한 형태를 따르거나 null/undefined일 수 있음을 명시
    dataProps?: GraphDataShape | null;
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

    const splitLabel = (label: string): string | string[] => {
        if (label.length <= 5) return label;
        
        const mid = Math.floor(label.length / 2);
        return [label.slice(0, mid), label.slice(mid)];
    };

    // [수정 3] Optional Chaining으로 안전하게 접근
    const evaluations = dataProps?.evaluations || [];

    const chartData: ChartData<'radar'> = {
        labels: evaluations.map((ev) => splitLabel(ev.item)),
        datasets: [
            {
                label: '점수',
                // EvaluationItem 인터페이스 덕분에 .score 자동완성 지원
                data: evaluations.map((ev) => ev.score),
                backgroundColor: 'rgba(0, 180, 140, 0.2)',
                borderColor: '#00b48c',
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#00b48c',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00b48c',
                pointRadius: 4,
            },
        ],
    };

    const options: ChartOptions<'radar'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { 
                enabled: true,
                callbacks: {
                    label: (context) => ` ${context.formattedValue}점`
                }
            },
        },
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    display: false,
                    stepSize: 20,
                },
                grid: {
                    color: '#e5e5e5',
                },
                angleLines: {
                    color: 'transparent',
                },
                pointLabels: {
                    font: {
                        size: 12,
                        weight: 'bold',
                        family: 'Pretendard',
                    },
                    color: '#333',
                },
            },
        },
        animation: { duration: 500 },
    };

    if (!dataProps) return null;

    return (
        <S.Body>
            <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
                <Radar data={chartData} options={options} />
            </div>
        </S.Body>
    );
}