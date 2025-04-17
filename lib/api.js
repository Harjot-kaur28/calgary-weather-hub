// lib/api.js
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
const CITY = 'Calgary'
const UNITS = 'metric'

export const fetchCurrentWeather = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
  )
  return data
}

export const fetchForecast = async () => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
  )
  return data
}