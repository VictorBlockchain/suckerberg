import { Progress } from "@/components/ui/progress"

export default function DataCollectionBar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-facebook-blue">Data Collection Progress</h2>
        <Progress value={99} className="w-full" style={{backgroundColor:'000'}} />
      <p className="text-sm text-gray-600 mt-2">Almost there! Just a few more likes and we'll own your soul.</p>
    </div>
  )
}

