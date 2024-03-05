'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const {data: session} = useSession()
 console.log("session",session)
  async function handleSubmit(event) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/add-records')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-3xl mb-6">Login</h1>

      <form className="w-[400px] flex flex-col gap-6" onSubmit={handleSubmit}>
        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="text" 
          name="email" 
          placeholder="Digite seu e-mail" 
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          className="h-12 rounded-md p-2 bg-transparent border border-gray-300"
          type="password" 
          name="password" 
          placeholder="Digite sua senha" 
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="h-12 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
