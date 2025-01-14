'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TokenBurning() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 3600))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-facebook-blue">Next Token Burning Ceremony</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-center">{formatTime(timeLeft)}</div>
        <p className="text-center text-sm text-gray-600 mt-2">Watch us burn tokens to create artificial scarcity!</p>
      </CardContent>
    </Card>
  )
}

