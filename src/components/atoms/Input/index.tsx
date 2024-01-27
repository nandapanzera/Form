import { cn } from '@/services/utils/className'
import { InputProps } from './types'
import { forwardRef, Ref } from 'react'

const Input = forwardRef(
  ({ invalid, ...props }: InputProps, forwardedRef: Ref<HTMLInputElement>) => {
    return (
      <div
        className={cn(
          'relative flex w-full flex-wrap justify-start gap-4 rounded align-middle',
          invalid ? 'border-red-600' : 'border-violet-400',
        )}
      >
        <input
          ref={forwardedRef}
          {...props}
          className={cn(
            'w-full flex-wrap rounded border-2 bg-transparent py-2 pl-4 font-medium text-zinc-700 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none active:opacity-100',
            invalid ? 'border-red-600' : 'border-violet-400',
          )}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
