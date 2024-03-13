import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from 'lucide-react';
import NavLink from './NavLink';

const meta = {
  title: 'ui/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  args: {
    href: '',
    title: 'Navigation link',
    icon: Copy,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
