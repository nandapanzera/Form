'use client'
import { cn } from '@/services/utils/className'
import { ButtonProps } from './types'

export function Button({ color, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'relative flex h-fit w-full flex-wrap justify-center px-8 py-2 align-middle text-zinc-50 shadow-md shadow-zinc-500 focus:outline-none focus:ring',
        color === 'green' &&
          'rounded bg-green-400  hover:bg-green-600 focus:ring-green-300 active:bg-green-700',
        color === 'purple' &&
          'rounded-lg bg-violet-400  hover:bg-violet-600 focus:ring-violet-300 active:bg-violet-700',
      )}
    >
      {children}
    </button>
  )
}
