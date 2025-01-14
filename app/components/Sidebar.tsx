import { BotIcon as Robot, DollarSign } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 space-y-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="font-bold text-lg mb-4 text-facebook-blue">Suggested Bots</h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            <Robot className="mr-3 text-facebook-blue" />
            <span className="text-gray-700">AI Friend #1</span>
          </li>
          <li className="flex items-center">
            <Robot className="mr-3 text-facebook-blue" />
            <span className="text-gray-700">AI Friend #2</span>
          </li>
          <li className="flex items-center">
            <Robot className="mr-3 text-facebook-blue" />
            <span className="text-gray-700">AI Friend #3</span>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="font-bold text-lg mb-4 text-facebook-blue">Sponsored</h2>
        <p className="text-gray-600 mb-4">Buy more data! We need it!</p>
        <button className="btn-primary w-full flex items-center justify-center">
          <DollarSign className="mr-2" />
          <span>Sell Your Soul</span>
        </button>
      </div>
    </aside>
  )
}

