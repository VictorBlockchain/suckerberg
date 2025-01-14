import { Bell, MessageCircle, Search, User } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-facebook-blue shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-2">
        <div className="flex items-center">
          <Image src="/finger1.jpg?height=40&width=40" alt="Suckerberg Logo" width={40} height={40} className="mr-2 rounded-sm border-2 border-white" />
          <h1 className="text-2xl font-bold text-white">The Suckbook</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-white cursor-pointer hover:text-gray-200 transition-colors" />
          <Bell className="text-white cursor-pointer hover:text-gray-200 transition-colors" />
          <MessageCircle className="text-white cursor-pointer hover:text-gray-200 transition-colors" />
          <User className="text-white cursor-pointer hover:text-gray-200 transition-colors" />
        </div>
      </div>
    </header>
  )
}

