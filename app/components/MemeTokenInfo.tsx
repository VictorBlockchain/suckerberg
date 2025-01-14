import { Rocket, TrendingUp, Users } from 'lucide-react'

export default function MemeTokenInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-facebook-blue">SUCKBOOK Token</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start">
          <Rocket className="text-facebook-blue mr-3 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-lg mb-1">Moon Soon</h3>
            <p className="text-gray-600">To the moon! 🚀🌕</p>
          </div>
        </div>
        <div className="flex items-start">
          <TrendingUp className="text-facebook-blue mr-3 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-lg mb-1">Tokenomics</h3>
            <p className="text-gray-600">1 Billion, Launched on Pump.fun</p>
          </div>
        </div>
        <div className="flex items-start">
          <Users className="text-facebook-blue mr-3 flex-shrink-0" size={24} />
          <div>
            <h3 className="font-bold text-lg mb-1">Community</h3>
            <p className="text-gray-600">Join our 3 billion bots!</p>
          </div>
        </div>
      </div>
      <button className="btn-primary mt-6 w-full text-lg">Buy SUCKBOOK</button>
    </div>
  )
}

