import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Image: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image
        src="https://github.com/ozgurgokdemir.png"
        alt="@ozgurgokdemir"
      />
      <Avatar.Fallback>ÖG</Avatar.Fallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image src="" alt="" />
      <Avatar.Fallback>ÖG</Avatar.Fallback>
    </Avatar>
  ),
};
