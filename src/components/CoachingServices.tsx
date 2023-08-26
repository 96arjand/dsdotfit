'use client'

import Link from 'next/link'
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'
import { Button } from '@/components/Button'

interface Service {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

const services: Array<Service> = [
  {
    href: '/', // TODO: update links
    name: 'Mock Interviews',
    description:
      'If you have an interview coming up or just want to hone your skills. We can evaluate you on your technical skills or how to talk about your accomplishments.',
    icon: UserIcon, // TODO_minor: update icon
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/', // TODO_minor: update link
    name: 'Case Study Interview',
    description:
      'Presenting your ideas is very different from coding them. And its an essential part of being a good DS. With this service well send you an unseen case study which youll then present to us',
    icon: ChatBubbleIcon, // TODO_minor: update icon
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/', // TODO_minor: update link
    name: 'Your personal Duck',
    description:
      'Dont mindless watch youtube videos without ever learning anything. Have someone that implements the Feynman method or talking to a duck.',
    icon: EnvelopeIcon, // TODO_minor: update icon
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
]

function ServiceIcon({ icon: Icon }: { icon: Service['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ServicePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Service['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Service({ resource }: { resource: Service }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ServicePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ServiceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function CoachingServices() {
  return (
    <div className="my-16 xl:max-w-none">
      <h1 id="coaching-services">Coaching Serives</h1>
      <p>
        We know that theres a difference between knowning something and talking
        about it. We also know that you only get betterat something by putting
        in reps and practicing. To often will we hear of people bombing
        interviews and saying "I knew that but i sounded like a spak". Thats why
        we offer services to practice in these settings
      </p>
      <Button href="/" variant="text" arrow="right" children="Find out more" />{' '}
      {/* TODO: add link*/}
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <Service key={service.href} resource={service} />
        ))}
      </div>
    </div>
  )
}
