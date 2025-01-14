import { Toggle } from "@/components/ui/toggle"
import { Label } from "@/components/ui/label"

export default function PrivacySettings() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-facebook-blue">Privacy Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="privacy-toggle-1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Protect your privacy
          </Label>
          <Toggle id="privacy-toggle-1" aria-label="Toggle privacy" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="privacy-toggle-2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Allow us to sell your data
          </Label>
          <Toggle id="privacy-toggle-2" defaultPressed aria-label="Toggle data selling" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="privacy-toggle-3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Opt out of tracking (won't work)
          </Label>
          <Toggle id="privacy-toggle-3" aria-label="Toggle opt out" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">* Changes to privacy settings may take up to never to take effect</p>
    </div>
  )
}

