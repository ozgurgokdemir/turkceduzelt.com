import type { Meta, StoryObj } from '@storybook/react';
import LengthSlider from './LengthSlider';

const meta = {
  title: 'features/LengthSlider',
  component: LengthSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LengthSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'LengthSlider',
};
