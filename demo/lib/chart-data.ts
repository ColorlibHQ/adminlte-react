import type { ChartData, ChartOptions } from 'chart.js'
import type { DirectChatContact, DirectChatMessage } from '@adminlte/react'
import { withBase } from './base'

// Chart.js "Sales Value" area chart (Dashboard v1). Monthly points, Jan–Jul 2023.
const revenueMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const revenueChartData: ChartData<'line'> = {
  labels: revenueMonths.map(m => m.slice(0, 3)),
  datasets: [
    {
      label: 'Digital Goods',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: '#0d6efd',
      fill: 'origin',
    },
    {
      label: 'Electronics',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#20c997',
      fill: 'origin',
    },
  ],
}

export const revenueChartOptions: ChartOptions<'line'> = {
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: items => `${revenueMonths[items[0].dataIndex]} 2023`,
      },
    },
  },
  scales: {
    y: { beginAtZero: true, suggestedMax: 100 },
  },
}

// Sparkline Data
export const sparklineData = {
  visitors: [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021],
  online: [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921],
  sales: [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21],
}

// DirectChat Contacts
export const chatContacts: DirectChatContact[] = [
  {
    name: 'Count Dracula',
    image: withBase('/assets/img/user1-128x128.jpg'),
    date: '2/28/2023',
    preview: 'How have you been? I was...',
  },
  {
    name: 'Sarah Doe',
    image: withBase('/assets/img/user7-128x128.jpg'),
    date: '2/23/2023',
    preview: 'I will be waiting for...',
  },
  {
    name: 'Nadia Jolie',
    image: withBase('/assets/img/user3-128x128.jpg'),
    date: '2/20/2023',
    preview: "I'll call you back at...",
  },
  {
    name: 'Nora S. Vans',
    image: withBase('/assets/img/user5-128x128.jpg'),
    date: '2/10/2023',
    preview: 'Where is your new...',
  },
  {
    name: 'John K.',
    image: withBase('/assets/img/user6-128x128.jpg'),
    date: '1/27/2023',
    preview: 'Can I take a look at...',
  },
  {
    name: 'Kenneth M.',
    image: withBase('/assets/img/user8-128x128.jpg'),
    date: '1/4/2023',
    preview: 'Never mind I found...',
  },
]

// DirectChat Messages
export const chatMessages: DirectChatMessage[] = [
  {
    from: 'Alexander Pierce',
    image: withBase('/assets/img/user1-128x128.jpg'),
    timestamp: '23 Jan 2:00 pm',
    text: "Is this template really for free? That's unbelievable!",
    isOwn: false,
  },
  {
    from: 'Sarah Bullock',
    image: withBase('/assets/img/user3-128x128.jpg'),
    timestamp: '23 Jan 2:05 pm',
    text: 'You better believe it!',
    isOwn: true,
  },
  {
    from: 'Alexander Pierce',
    image: withBase('/assets/img/user1-128x128.jpg'),
    timestamp: '23 Jan 5:37 pm',
    text: 'Working with AdminLTE on a great new app! Wanna join?',
    isOwn: false,
  },
  {
    from: 'Sarah Bullock',
    image: withBase('/assets/img/user3-128x128.jpg'),
    timestamp: '23 Jan 6:10 pm',
    text: 'I would love to.',
    isOwn: true,
  },
]
