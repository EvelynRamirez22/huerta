import { CloudSun, Droplets } from "lucide-react"

export function GardenStats() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
          <CloudSun className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs text-stone-500 font-medium">Clima</p>
          <p className="font-bold text-stone-800">24°C Soleado</p>
        </div>
      </div>

      <div className="h-8 w-px bg-stone-200 mx-2"></div>

      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          <Droplets className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs text-stone-500 font-medium">Humedad</p>
          <p className="font-bold text-stone-800">45% Baja</p>
        </div>
      </div>
    </div>
  )
}
