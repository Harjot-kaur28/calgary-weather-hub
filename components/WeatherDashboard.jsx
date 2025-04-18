'use client'
import { useEffect, useState } from 'react'
import CurrentWeatherCalgary from './CurrentWeatherCalgary'
import CalgaryForecast from './CalgaryForecast'
import Loader from './Loader'
import { fetchCurrentWeather, fetchForecast } from '@/lib/api'

export default function WeatherDashboard({ initialCurrent, initialForecast }) {
  const [current, setCurrent] = useState(initialCurrent)
  const [forecast, setForecast] = useState(initialForecast)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const refreshData = async () => {
    try {
      setLoading(true)
      const [newCurrent, newForecast] = await Promise.all([
        fetchCurrentWeather(),
        fetchForecast()
      ])
      setCurrent(newCurrent)
      setForecast(newForecast)
      setError(null)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(refreshData, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (!current || !forecast) return <Loader />

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-800">
          Calgary Weather Hub
        </h1>
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>
        )}

        {loading ? <Loader /> : (
          <>
            <CurrentWeatherCalgary data={current} />
            <CalgaryForecast data={forecast} />
          </>
        )}
      </div>
    </main>
  )
}