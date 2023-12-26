'use client'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { useState } from 'react'

export function SignUp({ showPassword }: { showPassword: boolean }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="xl:max-w-none">
      <div className="mx-auto my-2 flex max-w-xs flex-col gap-2">
        <label htmlFor="email" className="block text-sm font-medium leading-6">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1 pl-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
          placeholder="candidate@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div
        className={
          showPassword
            ? 'mx-auto my-2 flex max-w-xs flex-col gap-2 '
            : ' hidden'
        }
      >
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6"
        >
          Choose Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="block w-full rounded-md border-0 py-1 pl-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="not-prose mx-auto mt-5 max-w-xs">
        <Button href="/" arrow="right" children="Sign&nbsp;Up" />
      </div>
    </div>
  )
}
