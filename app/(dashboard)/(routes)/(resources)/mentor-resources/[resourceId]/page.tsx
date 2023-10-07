import Link from 'next/link'

import { StarIcon, UpdateIcon } from '@/public/SVGs'
import { nanoid } from 'nanoid'

export default function Resource({
  params,
}: {
  params: { resourceId: string }
}) {
  return (
    <div>
      <section className="bg-Neutral60 px-4 py-11 text-white font-Inter text-center">
        <h1 className="text-3xl font-medium">UX Principles for Designers</h1>
        <p className="mt-5 mb-3 w-[min(446px,_100%)] mx-auto">
          The secrets to creating great user experiences for your products, and
          helping your organization satisfy users.
        </p>
        <div className="flex items-center justify-center gap-3">
          <p className="flex items-center gap-1">
            {Array(5).fill(<StarIcon key={nanoid()} />)} 4.5
          </p>{' '}
          <div className="w-[1px] h-4 bg-white"></div>
          {/*BUG Fix this later (using nanoid as key)*/}
          <p>20 reviews</p>
        </div>
        <p className="my-3">
          Created by{' '}
          <Link href="" className="text-Accent2">
            Dylan Matthias
          </Link>{' '}
        </p>
        <p className="flex items-center gap-2 justify-center">
          <UpdateIcon />
          Last updated on 9/2023
        </p>
      </section>
      <section>
        <div>
          <div>
            <h2 className="text-NeutalBase font-medium text-2xl capitalize">
              course content
            </h2>
            <p className="text-Neutra40 font-normal">20 Lessons (1h 20m)</p>
          </div>
        </div>
      </section>
    </div>
  )
}
