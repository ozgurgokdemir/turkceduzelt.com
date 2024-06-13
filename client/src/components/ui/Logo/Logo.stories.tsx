import type { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

const meta = {
  title: 'ui/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  name: 'Logo',
  render: () => (
    <Logo to="/">
      <Logo.Icon />
      <Logo.Text />
    </Logo>
  ),
};

export const Icon: Story = {
  render: () => <Logo.Icon />,
};

export const Text: Story = {
  render: () => <Logo.Text />,
};
