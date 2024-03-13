import type { Meta, StoryObj } from '@storybook/react';
import Separator from './Separator';

const meta = {
  title: 'ui/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
    },
  },
  render: (args) => (
    <div className="flex h-8 w-80 items-center justify-center">
      <Separator {...args} />
    </div>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
