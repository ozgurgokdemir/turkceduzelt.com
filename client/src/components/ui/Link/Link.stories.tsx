import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta = {
  title: 'ui/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  name: 'Link',
  args: {
    to: '/',
    children: 'Şifreni mi unuttun?',
  },
};
