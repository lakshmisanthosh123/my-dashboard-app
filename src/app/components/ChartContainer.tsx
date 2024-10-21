

import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';


ChartJS.register(Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);


interface ChartContainerProps {
 
}


type Layout = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

const ResponsiveGridLayout = WidthProvider(Responsive);

const ChartContainer: React.FC<ChartContainerProps> = () => {
  // Define layouts for different screen sizes
  const layouts: { lg: Layout[]; md: Layout[]; sm: Layout[]; xs: Layout[]; xxs: Layout[] } = {
    lg: [
      { i: 'pieChart', x: 0, y: 0, w: 3, h: 2 },
      { i: 'barChart', x: 3, y: 0, w: 3, h: 2 },
    ],
    md: [
      { i: 'pieChart', x: 0, y: 0, w: 2, h: 2 },
      { i: 'barChart', x: 2, y: 0, w: 2, h: 2 },
    ],
    sm: [
      { i: 'pieChart', x: 0, y: 0, w: 1, h: 2 },
      { i: 'barChart', x: 0, y: 2, w: 1, h: 2 },
    ],
    xs: [
      { i: 'pieChart', x: 0, y: 0, w: 1, h: 2 },
      { i: 'barChart', x: 0, y: 2, w: 1, h: 2 },
    ],
    xxs: [
      { i: 'pieChart', x: 0, y: 0, w: 1, h: 2 },
      { i: 'barChart', x: 0, y: 2, w: 1, h: 2 },
    ],
  };


  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
      },
    ],
  };


  const barData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts} 
      cols={{ lg: 6, md: 4, sm: 2, xs: 1, xxs: 1 }} 
      rowHeight={30}
      width={1200}
      isDraggable={true}
      isResizable={true}
    >
      <div key="pieChart" style={{ padding: '10px' }}>
        <h2>Pie Chart</h2>
        <Pie data={pieData} />
      </div>
      <div key="barChart" style={{ padding: '10px' }}>
        <h2>Bar Chart</h2>
        <Bar data={barData} />
      </div>
    </ResponsiveGridLayout>
  );
};

export default ChartContainer;
