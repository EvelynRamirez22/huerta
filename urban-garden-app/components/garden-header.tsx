import { Bell, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GardenHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-xl font-bold text-green-900 hidden md:inline-block">Huerta App</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#" className="text-green-700">
            Mi Huerta
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            Mapa
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            Comunidad
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            Guía de Cultivo
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-stone-600" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-stone-100">
            <User className="h-5 w-5 text-stone-600" />
          </Button>
        </div>
      </div>
    </header>
  )
}
