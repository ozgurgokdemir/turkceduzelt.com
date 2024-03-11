import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from 'lucide-react';
import Button from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Brand: Story = {
  args: {
    variant: 'brand',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Critical: Story = {
  args: {
    variant: 'critical',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const Icon: Story = {
  args: {
    variant: 'ghost',
    size: 'icon',
  },
  render: (args) => (
    <Button {...args}>
      <Copy size={20} strokeWidth={1.5} className="icon-primary" />
    </Button>
  ),
};
