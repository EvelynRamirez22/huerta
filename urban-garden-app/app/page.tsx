import { GardenHeader } from "@/components/garden-header"
import { GardenStats } from "@/components/garden-stats"
import { TaskList } from "@/components/task-list"
import { GardenMap } from "@/components/garden-map"
import { CommunityFeed } from "@/components/community-feed"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <GardenHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Welcome & Weather Section */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-green-800 mb-2">Hola, Sembrador 🌱</h1>
            <p className="text-stone-600">
              Hoy es un buen día para cuidar de la huerta. Hay 3 tareas pendientes en el sector "Tomates".
            </p>
          </div>
          <GardenStats />
        </section>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column: Tasks & Actions */}
          <div className="space-y-6 lg:col-span-2">
            <QuickActions />
            <TaskList />
            <GardenMap />
          </div>

          {/* Right Column: Community & Activity */}
          <div className="space-y-6">
            <CommunityFeed />

            {/* Gamification / Motivation Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-semibold text-lg mb-4 text-green-800">Tu Impacto</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>
                    Nivel: <span className="font-bold text-green-600">Cuidador Experto</span>
                  </span>
                  <span>850 pts</span>
                </div>
                <div className="w-full bg-stone-100 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <p className="text-xs text-stone-500">¡Faltan 150 pts para desbloquear "Maestro Compostador"!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
