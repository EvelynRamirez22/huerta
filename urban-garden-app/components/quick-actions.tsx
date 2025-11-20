import { Plus, Sprout, Droplets, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Button className="h-auto py-4 flex flex-col gap-2 bg-green-600 hover:bg-green-700 text-white shadow-sm">
        <Droplets className="h-6 w-6" />
        <span>Registrar Riego</span>
      </Button>
      <Button
        variant="outline"
        className="h-auto py-4 flex flex-col gap-2 border-green-200 text-green-800 hover:bg-green-50 hover:text-green-900 bg-transparent"
      >
        <Sprout className="h-6 w-6" />
        <span>Nueva Siembra</span>
      </Button>
      <Button
        variant="outline"
        className="h-auto py-4 flex flex-col gap-2 border-stone-200 text-stone-700 hover:bg-stone-50 bg-transparent"
      >
        <MapPin className="h-6 w-6" />
        <span>Buscar Lugar</span>
      </Button>
      <Button
        variant="outline"
        className="h-auto py-4 flex flex-col gap-2 border-stone-200 text-stone-700 hover:bg-stone-50 bg-transparent"
      >
        <Plus className="h-6 w-6" />
        <span>Otra Tarea</span>
      </Button>
    </div>
  )
}
