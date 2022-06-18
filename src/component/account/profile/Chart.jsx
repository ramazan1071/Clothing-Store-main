import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

const createData = (time, amount) => {
  return { time, amount }
}

const data = [
  createData('Ocak', 0),
  createData('Şubat', 300),
  createData('Mart', 600),
  createData('Nisan', 800),
  createData('Mayıs', 1500),
  createData('Haziran', 1600),
  createData('Temmuz', 1700),
  createData('Ağustos', 1300),
  createData('Eylül', 1900),
  createData('Ekim', 2000),
  createData('Kasım', 2200),
  createData('Aralık', 2400),
]

const Chart = () => {
  const theme = useTheme()

  return (
    <>
      <Title>Geçen Yıl</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Alışveriş Tablosu (TL)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Chart
