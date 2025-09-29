import React, { useEffect, useState } from 'react'
import { fetchUsers, addUser, askAI } from './api'

export default function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [aiPrompt, setAiPrompt] = useState('')
  const [aiResp, setAiResp] = useState('')

  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      const data = await fetchUsers()
      setUsers(data)
    } catch (e) {
      console.error(e)
    }
  }

  async function submit(e) {
    e.preventDefault()
    const u = await addUser({ name, role })
    setName('')
    setRole('')
    setUsers(prev => [...prev, u])
  }

  async function ask(e) {
    e.preventDefault()
    const r = await askAI(aiPrompt)
    setAiResp(r.answer)
  }

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Realtime Project</h1>

      <section>
        <h2>Users</h2>
        <form onSubmit={submit}>
          <input placeholder="name" value={name} onChange={e => setName(e.target.value)} required />
          <input placeholder="role" value={role} onChange={e => setRole(e.target.value)} required />
          <button type="submit">Add</button>
        </form>
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.id} - {u.name} ({u.role})</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>AI Service (mock)</h2>
        <form onSubmit={ask}>
          <input placeholder="Ask something" value={aiPrompt} onChange={e => setAiPrompt(e.target.value)} />
          <button type="submit">Ask AI</button>
        </form>
        <div><strong>Answer:</strong> {aiResp}</div>
      </section>
    </div>
  )
}
