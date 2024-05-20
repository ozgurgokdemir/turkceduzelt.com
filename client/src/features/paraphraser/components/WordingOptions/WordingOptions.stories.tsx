import type { Meta, StoryObj } from '@storybook/react';
import WordingOptions from './WordingOptions';

const meta = {
  title: 'features/WordingOptions',
  component: WordingOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WordingOptions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'WordingOptions',
  render: () => (
    <div className="h-11 border-b border-primary">
      <WordingOptions />
    </div>
  ),
};
