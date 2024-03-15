import type { Meta, StoryObj } from '@storybook/react';
import SidebarComponent from './Sidebar';

const meta = {
  title: 'layout/Sidebar',
  component: SidebarComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sidebar: Story = {
  render: () => <SidebarComponent className="w-80" />,
};
