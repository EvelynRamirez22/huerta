import { GardenHeader } from "@/components/garden-header";
import { TaskList } from "@/components/task-list";
import { GardenStats } from "@/components/garden-stats";
import { CommunityFeed } from "@/components/community-feed";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <GardenHeader />

      <main className="container mx-auto p-4 md:p-6 space-y-6">
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Hola, cuidador 🌱
            </h1>
            <p className="text-stone-600">
              Estas son tus tareas pendientes para hoy.
            </p>
          </div>

          <GardenStats />
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* ⭐ NUEVA SECCIÓN: todas las tareas programadas */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-semibold text-lg mb-4 text-green-800">
                Tareas Programadas
              </h3>

              <ul className="space-y-3 text-stone-700">
                <li className="p-3 rounded-lg bg-stone-100">
                  🌧️ <strong>Riego:</strong> Regar sector Tomates
                </li>
                <li className="p-3 rounded-lg bg-stone-100">
                  🌱 <strong>Siembra:</strong> Plantar albahaca en sector
                  Hierbas
                </li>
                <li className="p-3 rounded-lg bg-stone-100">
                  ✂️ <strong>Cuidado:</strong> Podar hojas secas de Lechuga
                </li>
                <li className="p-3 rounded-lg bg-stone-100">
                  🧺 <strong>Cosecha:</strong> Recolectar zanahorias maduras
                </li>
              </ul>
            </div>

            {/* Tu TaskList original */}
            <TaskList />
          </div>

          <div className="space-y-6">
            <CommunityFeed />

            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-semibold text-lg mb-4 text-green-800">
                Tu Impacto
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>
                    Nivel:{" "}
                    <span className="font-bold text-green-600">
                      Cuidador Experto
                    </span>
                  </span>
                  <span>850 pts</span>
                </div>

                <div className="w-full bg-stone-100 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>

                <p className="text-xs text-stone-500">
                  ¡Faltan 150 pts para desbloquear "Maestro Compostador"!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
