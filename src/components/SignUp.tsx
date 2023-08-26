import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

export function SignUp() {
  return (
    <div className="xl:max-w-none">
      <div className="">
        <label htmlFor="email" className="block text-sm font-medium leading-6">
          Email
        </label>
        <div className="my-2 flex flex-col justify-center gap-2 md:flex-row">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full max-w-xs rounded-md border-0 py-1 pl-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            placeholder="candidate@email.com"
          />
          <div className="not-prose mr-auto max-w-xs">
            <Button href="/" arrow="right" children="Sign&nbsp;Up" />
          </div>
        </div>
      </div>
    </div>
  )
}
