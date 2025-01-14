import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, TwitterIcon as TikTok, Ban } from 'lucide-react'

export default function WeStealEverything() {
  const stolenItems = [
    { icon: Facebook, text: "Stole Facebook's entire business model" },
    { icon: Instagram, text: "Stole your data (and your mom's)" },
    { icon: TikTok, text: "Stole TikTok features" },
    { icon: Ban, text: "Couldn't steal TikTok users, so we got it banned!" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-facebook-blue">We Steal Everything</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stolenItems.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <item.icon className="h-6 w-6 text-facebook-blue" />
              <CardTitle className="text-lg">{item.text}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Because innovation is overrated!</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

