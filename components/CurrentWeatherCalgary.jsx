import WeatherIcon from './WeatherIcon'

export default function CurrentWeatherCalgary({ data }) {
  return (
    <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Current Weather</h2>
          <p className="text-6xl font-bold my-4">
            {Math.round(data.main.temp)}°C
          </p>
          <div className="space-y-1 text-gray-600">
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind: {Math.round(data.wind.speed * 3.6)} km/h</p>
            <p className="capitalize">{data.weather[0].description}</p>
          </div>
        </div>
        <WeatherIcon condition={data.weather[0].icon} size={120} />
      </div>
    </div>
  )
}