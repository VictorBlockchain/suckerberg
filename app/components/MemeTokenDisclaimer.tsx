import { AlertTriangle } from 'lucide-react'

export default function MemeTokenDisclaimer() {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
      <div className="flex items-center mb-2">
        <AlertTriangle className="h-6 w-6 mr-2" />
        <h3 className="font-bold text-lg">Meme Token Disclaimer</h3>
      </div>
      <p className="text-sm">
        $SUCK is a satirical meme token with no real value. Do not invest any real money. 
        This website is a parody and not affiliated with any real social media platform or cryptocurrency. 
        Any resemblance to real persons, living or dead, or actual companies is purely coincidental and probably hilarious. 
        Remember, in the world of meme tokens, the joke's on everyone!
      </p>
    </div>
  )
}

