import type { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from './Header';

const meta = {
  title: 'layout/Header',
  component: HeaderComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Header: Story = {};
