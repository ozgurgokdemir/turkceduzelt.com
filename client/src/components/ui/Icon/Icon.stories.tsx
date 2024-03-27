import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from 'lucide-react';
import Icon from './Icon';

const meta = {
  title: 'ui/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: Copy,
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Critical: Story = {
  args: {
    variant: 'critical',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
