import Image from 'next/image'

import example from './example.png'

export function ExampleImage() {
  return <Image src={example} alt="" className="h-50 w-50" unoptimized />
}
