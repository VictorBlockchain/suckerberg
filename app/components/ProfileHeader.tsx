import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserPlus, MessageCircle } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="bg-facebook-blue relative" style={{height:'433px', marginBottom:'36px'}}>
        <Image
          src="/Fuck.png?height=200&width=800"
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20 relative">
        <div className="rounded-full border-4 border-white overflow-hidden bg-white">
          <Image
            src="/suckerberg2.jpg?height=128&width=128"
            alt="Mark Suckerberg"
            width={128}
            height={128}
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-grow" >
          <h1 className="text-2xl font-bold mt-3" style={{paddingTop:'13px'}}>M. Suckerberg</h1>
          <p className="text-gray-600">Founder & CEO at Suckerberg</p>
          <p className="text-sm text-gray-500 mt-1">1.84B friends (all bots)</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-2">
          <Button className="flex items-center">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Bot
          </Button>
          <Button variant="outline" className="flex items-center">
            <MessageCircle className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}

