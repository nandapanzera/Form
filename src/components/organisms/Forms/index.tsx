/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-fit flex-col flex-wrap justify-center gap-4 rounded-lg bg-slate-50 p-6 shadow-lg shadow-zinc-500 lg:p-8"
    >
      <div className="flex w-64 flex-col gap-2 lg:w-96">
        <Input
          {...register('firstname', {
            required: 'O campo do primeiro nome é obrigatório.',
            minLength: {
              value: 1,
              message: 'O campo do primeiro nome é obrigatório.',
            },
            maxLength: {
              value: 20,
              message: 'O campo precisa ter no máximo 20 caracteres.',
            },
            pattern: {
              value: /^[A-Za-zÀ-ÿ\s]+$/,
              message: 'O campo do primeiro nome deve conter apenas letras.',
            },
          })}
          placeholder="First Name"
          type="text"
          name="firstname"
          invalid={!!errors.firstname}
        />
        <ErrorMessage
          errors={errors}
          name="firstname"
          render={({ message }) => (
            <p className="text-xs font-medium text-red-500">{message}</p>
          )}
        />
      </div>
      <div className="flex w-64 flex-col gap-2 lg:w-96">
        <Input
          {...register('lastname', {
            required: 'O campo do sobrenome nome é obrigatório.',
            minLength: {
              value: 1,
              message: 'O campo do sobrenome é obrigatório.',
            },
            maxLength: {
              value: 20,
              message: 'O campo precisa ter no máximo 20 caracteres.',
            },
            pattern: {
              value: /^[A-Za-zÀ-ÿ\s]+$/,
              message: 'O campo do primeiro nome deve conter apenas letras.',
            },
          })}
          placeholder="Last Name"
          type="text"
          name="lastname"
          invalid={!!errors.lastname}
        />
        <ErrorMessage
          errors={errors}
          name="lastname"
          render={({ message }) => (
            <p className="text-xs font-medium text-red-500">{message}</p>
          )}
        />
      </div>
      <div className="flex w-64 flex-col gap-2 lg:w-96">
        <Input
          {...register('email', {
            required: 'O campo do e-mail é obrigatório.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
              message: 'Insira um endereço de e-mail válido.',
            },
          })}
          placeholder="Email Address"
          type="email"
          name="email"
          invalid={!!errors.email}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <p className="text-xs font-medium text-red-500">{message}</p>
          )}
        />
      </div>
      <div className="flex w-64 flex-col gap-2 lg:w-96">
        <Input
          {...register('password', {
            required: 'O campo da senha é obrigatório',
            minLength: {
              value: 6,
              message: 'A senha deve ter pelo menos 6 caracteres.',
            },
            maxLength: {
              value: 8,
              message: 'A senha não pode ter mais de 8 caracteres.',
            },
          })}
          placeholder="Password"
          type="password"
          name="password"
          invalid={!!errors.password}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => (
            <p className="text-xs font-medium text-red-500">{message}</p>
          )}
        />
      </div>
      <div className="flex w-64 lg:w-96">
        <Button type="submit" color="green">
          <div className="font-medium text-zinc-50">CLAIM YOUR FREE TRIAL</div>
        </Button>
      </div>

      <span className="w-fit max-w-60 flex-wrap text-center text-xs text-zinc-500 lg:max-w-96">
        By clicking the button, you are agreeing to our{' '}
        <a
          className="cursor-pointer text-xs font-semibold text-red-500 hover:text-red-600 focus:font-bold focus:text-red-700 focus:outline-none"
          href="https://tailwindcss.com/docs"
        >
          Terms and Services
        </a>
      </span>
    </form>
  )
}
