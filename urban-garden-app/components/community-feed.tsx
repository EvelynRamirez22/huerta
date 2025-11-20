import { MessageSquare, Heart } from "lucide-react"

export function CommunityFeed() {
  const activities = [
    {
      id: 1,
      user: "Ana García",
      action: "regó el Sector A",
      time: "Hace 20 min",
      avatar: "AG",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 2,
      user: "Carlos Ruiz",
      action: "plantó semillas de albahaca",
      time: "Hace 2 horas",
      avatar: "CR",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      user: "Escuela Técnica",
      action: "publicó un nuevo taller",
      time: "Hace 5 horas",
      avatar: "ET",
      color: "bg-orange-100 text-orange-700",
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200">
      <div className="p-4 border-b border-stone-100">
        <h3 className="font-semibold text-lg text-stone-800">Actividad Reciente</h3>
      </div>
      <div className="p-4 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${activity.color}`}
            >
              {activity.avatar}
            </div>
            <div className="space-y-1">
              <p className="text-sm text-stone-800">
                <span className="font-semibold">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-stone-500">{activity.time}</p>
              <div className="flex gap-3 mt-1">
                <button className="text-xs text-stone-500 hover:text-red-500 flex items-center gap-1">
                  <Heart className="h-3 w-3" /> 2
                </button>
                <button className="text-xs text-stone-500 hover:text-blue-500 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Responder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
