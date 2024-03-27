import type { Meta, StoryObj } from '@storybook/react';
import SuggestionTabs from './SuggestionTabs';

const meta = {
  title: 'features/SuggestionTabs',
  component: SuggestionTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    words: [
      { correct: 'yanlış', incorrect: 'yalnış' },
      { correct: 'her şey', incorrect: 'herşey' },
    ],
    sentences: [
      {
        correct:
          'Gece gökyüzünde yalnız bir yıldız parlıyordu, her şey sessizce uyumaya başlamıştı.',
        incorrect:
          'Gece gökyüzünde yanlız bir yıldız parlıyordu, herşey sessizce uyumaya başlamıştı.',
      },
    ],
  },
} satisfies Meta<typeof SuggestionTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'SuggestionTabs',
  render: (args) => (
    <div className="w-96">
      <SuggestionTabs {...args} />
    </div>
  ),
};
