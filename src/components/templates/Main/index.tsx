'use client'
import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/organisms/Forms'
import { motion } from 'framer-motion'

export function Main() {
  return (
    // bg
    <div className="flex h-lvh w-full flex-wrap items-center justify-center bg-red-300 align-middle">
      {/* div principal */}
      <div className="flex w-fit flex-col flex-wrap items-center justify-center gap-12 align-middle lg:flex-row lg:gap-16">
        {/* div Texto */}
        <div className="flex w-fit max-w-80 flex-col flex-wrap justify-start gap-5 align-middle lg:max-w-fit">
          {/* div title */}
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="flex text-center text-4xl font-bold text-zinc-50 lg:max-w-[500px] lg:text-left lg:text-6xl"
          >
            {' '}
            Learn to code by watching others
          </motion.div>
          {/* div content */}
          <motion.div
            animate={{ x: [-300, 0] }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="flex flex-wrap text-center text-sm font-medium text-zinc-50 lg:max-w-[550px] lg:text-left lg:text-base lg:font-light"
          >
            {' '}
            Ipsum reprehenderit reprehenderit consectetur ut cupidatat eiusmod
            labore ad aute eu non qui et consectetur.
          </motion.div>
        </div>
        {/* div form */}
        <div className="flex w-fit flex-col flex-wrap items-center justify-center gap-6">
          <motion.div
            animate={{ y: [-50, 10, 0] }}
            transition={{ ease: 'easeOut', duration: 1 }}
            className="w-full"
          >
            <Button color="purple">
              <div className="w-fit max-w-36 text-center lg:max-w-64">
                <span className="text-xs font-bold">
                  Try it free 7 days{' '}
                  <span className="text-xs font-light">
                    then $20/mon. thereafter
                  </span>
                </span>
              </div>
            </Button>
          </motion.div>
          <Form />
        </div>
      </div>
    </div>
  )
}
