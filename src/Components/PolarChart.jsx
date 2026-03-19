import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { PolarArea } from 'react-chartjs-2'

// 🔥 Register required parts
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
)

const PolarChart = ({ dr, pt, ap }) => {

  const data = {
    labels: ['Doctors', 'Patients', 'Appointments'],
    datasets: [
      {
        label: 'Hospital Data',
        data: [
          dr?.length || 0,
          pt?.length || 0,
          ap?.length || 0
        ],
        backgroundColor: [
          '#060ef6',
          '#1f9804',
          '#f68a06'
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }

  return (
    <div className='bg-white p-4 rounded-lg shadow h-75'>
      <h2 className='font-bold mb-2'>Hospital Distribution</h2>
      <PolarArea data={data} options={options} />
    </div>
  )
}

export default PolarChart