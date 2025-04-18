import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaBolt } from 'react-icons/fa'

export default function WeatherIcon({ condition, size = 24, className }) {
  const getIcon = () => {
    if (condition.startsWith('01')) return <FaSun size={size} className="text-amber-400" />
    if (condition.startsWith('02') || condition.startsWith('03') || condition.startsWith('04')) 
      return <FaCloud size={size} className="text-gray-500" />
    if (condition.startsWith('09') || condition.startsWith('10')) 
      return <FaCloudRain size={size} className="text-blue-500" />
    if (condition.startsWith('13')) return <FaSnowflake size={size} className="text-blue-300" />
    if (condition.startsWith('11')) return <FaBolt size={size} className="text-yellow-400" />
    return <FaCloud size={size} className="text-gray-500" />
  }

  return <div className={className}>{getIcon()}</div>
}