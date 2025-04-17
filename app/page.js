// app/page.js
import WeatherDashboard from '@/components/WeatherDashboard'
import { fetchCurrentWeather, fetchForecast } from '@/lib/api'

export default async function Home() {
  const initialCurrent = await fetchCurrentWeather()
  const initialForecast = await fetchForecast()

  return (
    <WeatherDashboard 
      initialCurrent={initialCurrent}
      initialForecast={initialForecast}
    />
  )
}