import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MetaversePreview() {
  const items = [
    { name: "Virtual Privacy", price: 999.99 },
    { name: "Digital Friendship", price: 49.99 },
    { name: "Metaverse Sunscreen", price: 29.99 },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-facebook-blue">Metaverse Preview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>Essential for your digital life</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

