import type { Meta, StoryObj } from '@storybook/react';
import Suggestion from './Suggestion';

const meta = {
  title: 'features/Suggestion',
  component: Suggestion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Suggestion',
  args: {
    incorrect: 'incorrect',
    correct: 'correct',
  },
  render: (args) => (
    <div className="w-96">
      <Suggestion className="w-full" {...args} />
    </div>
  ),
};
