import { Meta, StoryObj } from '@storybook/react'
import Input from '.'
import { InputProps } from './types'

const meta: Meta<InputProps> = {
  title: 'Components/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Nome',
  },
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}
