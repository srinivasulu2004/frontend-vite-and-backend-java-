// small wrapper to call backend and ai-service
export async function fetchUsers() {
const res = await fetch('/api/users')
return res.json()
}


export async function addUser(user) {
const res = await fetch('/api/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(user)
})
return res.json()
}


export async function askAI(prompt) {
const res = await fetch('/ai/generate', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ prompt })
})
return res.json()
}
