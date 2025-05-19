import { UserGroupIcon, CurrencyEuroIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

const icons = {
  users: <UserGroupIcon className="w-6 h-6 text-white" />,
  revenue: <CurrencyEuroIcon className="w-6 h-6 text-white" />,
  messages: <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />,
}

export default function StatCard({ title, value, icon }: { title: string, value: string, icon: keyof typeof icons }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      <div className="bg-red-600 p-3 rounded-full">
        {icons[icon]}
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  )
}
