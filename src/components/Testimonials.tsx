import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const testimonials = [
  {
    href: '/#', // TODO: update link
    name: 'Zayd Monkman',
    // TODO: add LinkedIn
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    href: '/', // TODO: update link
    name: 'Dan Windmill',
    // TODO: add LinkedIn
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
]

export function Testimonials() {
  return (
    <div className="my-16 xl:max-w-none">
      <h1 id="testimonials">Testimonials</h1>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {testimonial.description}
            </p>
            <p className="mt-4">
              <Button href={testimonial.href} variant="text" arrow="right">
                {' '}
                {/* TODO_minor: Open in new tab */}
                See LinkedIn
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
