import { ButtonProps } from './types'
import { Button } from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ButtonProps> = {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Botão',
      description: 'Conteúdo do botão',
    },
    color: { defaultValue: 'black', description: 'Cor do Botão' },
  },
  args: {
    color: 'green',
    children: 'Botao',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {}

export const Green: Story = {
  args: {
    color: 'green',
    children:
      'Est consequat deserunt quis laborum adipisicing elit aliquip quis velit aute.',
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children:
      'Est consequat deserunt quis laborum adipisicing elit aliquip quis velit aute.',
  },
}
