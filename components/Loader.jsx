export default function Loader() {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-32 bg-gray-200 rounded-xl"></div>
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    )
  }