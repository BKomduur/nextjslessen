'use client'

import { signup } from '@/app/actions/auth'
import { useActionState } from 'react'

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <form action={action}>
		<input id="email" name="email" placeholder="E-mail" />
		<input id="password" name="password" type="password" />
		<button disabled={pending} type="submit">
			Registreren
		</button>
    </form>
  )
}