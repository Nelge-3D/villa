export default function RecentUsersTable() {
  const users = [
    { name: 'Jean Dupont', email: 'jean@gmail.com', joined: '12 mai 2024' },
    { name: 'Sophie Martin', email: 'sophie@gmail.com', joined: '10 mai 2024' },
    { name: 'Louis G.', email: 'louisgeriel.nelge@gmail.com', joined: '8 mai 2024' },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Utilisateurs récents</h2>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2">Nom</th>
            <th className="py-2">Email</th>
            <th className="py-2">Inscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-t">
              <td className="py-2">{u.name}</td>
              <td className="py-2">{u.email}</td>
              <td className="py-2">{u.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
