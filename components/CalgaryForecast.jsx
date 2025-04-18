import WeatherIcon from './WeatherIcon'
import { format, parseISO } from 'date-fns'

const processForecastData = (list) => {
  const dailyData = {}
  list.forEach(item => {
    const date = format(parseISO(item.dt_txt), 'yyyy-MM-dd')
    if (!dailyData[date]) {
      dailyData[date] = {
        min: item.main.temp_min,
        max: item.main.temp_max,
        icon: item.weather[0].icon,
        description: item.weather[0].main
      }
    } else {
      dailyData[date].min = Math.min(dailyData[date].min, item.main.temp_min)
      dailyData[date].max = Math.max(dailyData[date].max, item.main.temp_max)
    }
  })
  return Object.values(dailyData).slice(1, 6) //for Getting next 5 days
}

export default function CalgaryForecast({ data }) {
  const forecastData = processForecastData(data.list)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {forecastData.map((day, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md">
          <p className="font-medium mb-2">
            {format(new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000), 'EEE')}
          </p>
          <WeatherIcon condition={day.icon} size={40} className="my-2" />
          <div className="mt-2 text-sm">
            <p>H: {Math.round(day.max)}°C</p>
            <p>L: {Math.round(day.min)}°C</p>
          </div>
        </div>
      ))}
    </div>
  )
}