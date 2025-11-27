import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Regar Sector Tomates",
      status: "urgent",
      time: "Hoy",
      assignee: "Sin asignar",
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      title: "Retirar maleza en Cantero 3",
      status: "pending",
      time: "Mañana",
      assignee: "Tú",
      icon: Clock,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      title: "Añadir compost a la tierra",
      status: "done",
      time: "Ayer",
      assignee: "María L.",
      icon: CheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
      <div className="p-4 border-b border-stone-100 flex justify-between items-center">
        <h3 className="font-semibold text-lg text-stone-800">
          Tareas Pendientes
        </h3>
        {/* <Button variant="link" href="/gestion-tareas" className="text-green-600 text-sm h-auto p-0">
          Ver todas
        </Button> */}
        <a className="text-green-600 text-sm h-auto p-0" href="/gestion-tareas">
          ver todas
        </a>
      </div>
      <div className="divide-y divide-stone-100">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 flex items-center gap-4 hover:bg-stone-50 transition-colors"
          >
            <div className={`p-2 rounded-full ${task.bgColor} ${task.color}`}>
              <task.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-stone-900">{task.title}</h4>
              <p className="text-sm text-stone-500">
                {task.time} • {task.assignee}
              </p>
            </div>
            {task.status !== "done" && (
              <Button
                size="sm"
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
              >
                Completar
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
