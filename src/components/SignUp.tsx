'use client'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { useState } from 'react'
import { db } from '../../firebaseConfig'
import { getAnalytics, logEvent } from 'firebase/analytics'

import { collection, addDoc } from 'firebase/firestore'

export function SignUp({ showPassword }: { showPassword: boolean }) {
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState<null | boolean>(null)
  const [password, setPassword] = useState('')

  const submitEmail = async () => {
    const analytics = getAnalytics()
    logEvent(analytics, 'notification_received')
    console.log('logged')
    try {
      const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegexPattern.test(email)) {
        throw new Error('Email must contain @')
      }

      const docRef = await addDoc(collection(db, 'emails'), {
        email: email,
      })
      console.log('Document written with ID: ', docRef.id)
      setEmailSent(true)
    } catch (e) {
      console.error('Error adding document: ', e)
      setEmailSent(false)
    }
  }

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
        <Button
          arrow="right"
          children="Sign&nbsp;Up"
          onClick={() => submitEmail()}
        />
      </div>
      {emailSent && typeof emailSent === 'boolean' && (
        <div className="text-emerald-500 dark:text-emerald-400">
          Success! - email sent
        </div>
      )}
      {!emailSent && typeof emailSent === 'boolean' && (
        <div className="text-red-500">Failure - Try again</div>
      )}
    </div>
  )
}
