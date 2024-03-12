import type { Meta, StoryObj } from '@storybook/react';
import LogoComponent from './Logo';

const meta = {
  title: 'layout/Logo',
  component: LogoComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logo: Story = {};
