import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './index';

const meta = {
  title: 'ui/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Tabs',
  render: () => (
    <Tabs defaultValue="all" className="w-96">
      <Tabs.List className="w-full">
        <Tabs.Trigger value="all" className="flex-1">
          Hepsi
        </Tabs.Trigger>
        <Tabs.Trigger value="word" className="flex-1">
          Kelime
        </Tabs.Trigger>
        <Tabs.Trigger value="sentence" className="flex-1">
          Cümle
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="all">Hepsi</Tabs.Content>
      <Tabs.Content value="word">Kelime</Tabs.Content>
      <Tabs.Content value="sentence">Cümle</Tabs.Content>
    </Tabs>
  ),
};
