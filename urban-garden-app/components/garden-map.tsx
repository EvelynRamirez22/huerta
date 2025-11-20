import { Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GardenMap() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
      <div className="p-4 border-b border-stone-100 flex justify-between items-center">
        <h3 className="font-semibold text-lg text-stone-800">Mapa de la Huerta</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Maximize2 className="h-4 w-4 text-stone-500" />
        </Button>
      </div>
      <div className="aspect-video bg-stone-100 relative p-4">
        {/* Mock Map Visualization */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="bg-green-100/80 border-2 border-green-300 rounded-lg p-2 flex flex-col justify-center items-center cursor-pointer hover:bg-green-200 transition-colors">
            <span className="font-bold text-green-800">Sector A</span>
            <span className="text-xs text-green-600">Tomates</span>
            <div className="mt-2 px-2 py-0.5 bg-red-100 text-red-700 text-[10px] rounded-full font-medium">
              Necesita Agua
            </div>
          </div>
          <div className="bg-amber-100/80 border-2 border-amber-300 rounded-lg p-2 flex flex-col justify-center items-center cursor-pointer hover:bg-amber-200 transition-colors">
            <span className="font-bold text-amber-800">Sector B</span>
            <span className="text-xs text-amber-600">Zanahorias</span>
          </div>
          <div className="bg-stone-200/80 border-2 border-stone-300 rounded-lg p-2 flex flex-col justify-center items-center cursor-pointer hover:bg-stone-300 transition-colors border-dashed">
            <span className="font-bold text-stone-500">Sector C</span>
            <span className="text-xs text-stone-500">Disponible</span>
          </div>
        </div>
      </div>
    </div>
  )
}
