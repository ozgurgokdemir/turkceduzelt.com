import type { Meta, StoryObj } from '@storybook/react';
import TabsComponent from './Tabs';

const meta = {
  title: 'ui/Tabs',
  component: TabsComponent.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsComponent.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  render: () => (
    <TabsComponent.Root defaultValue="all" className="w-96">
      <TabsComponent.List className="w-full">
        <TabsComponent.Trigger value="all" className="flex-1">
          Hepsi
        </TabsComponent.Trigger>
        <TabsComponent.Trigger value="word" className="flex-1">
          Kelime
        </TabsComponent.Trigger>
        <TabsComponent.Trigger value="sentence" className="flex-1">
          Cümle
        </TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="all">Hepsi</TabsComponent.Content>
      <TabsComponent.Content value="word">Kelime</TabsComponent.Content>
      <TabsComponent.Content value="sentence">Cümle</TabsComponent.Content>
    </TabsComponent.Root>
  ),
};
