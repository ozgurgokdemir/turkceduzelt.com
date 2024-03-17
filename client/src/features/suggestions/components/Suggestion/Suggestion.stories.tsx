import type { Meta, StoryObj } from '@storybook/react';
import Suggestion from './Suggestion';

const meta = {
  title: 'features/Suggestion',
  component: Suggestion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Suggestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Word: Story = {
  args: {
    variant: 'word',
    incorrect: 'incorrect',
    correct: 'correct',
  },
  render: (args) => (
    <div className="w-96">
      <Suggestion className="w-full" {...args} />
    </div>
  ),
};

export const Sentence: Story = {
  args: {
    variant: 'sentence',
    incorrect: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    correct: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  render: (args) => (
    <div className="w-96">
      <Suggestion className="w-full" {...args} />
    </div>
  ),
};
