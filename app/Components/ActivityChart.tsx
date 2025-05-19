
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Lun', users: 20 },
  { name: 'Mar', users: 35 },
  { name: 'Mer', users: 50 },
  { name: 'Jeu', users: 30 },
  { name: 'Ven', users: 60 },
  { name: 'Sam', users: 45 },
  { name: 'Dim', users: 70 },
]

export default function ActivityChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Activité Hebdomadaire</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#dc2626" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
