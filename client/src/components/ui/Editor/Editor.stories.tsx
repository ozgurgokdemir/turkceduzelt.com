import type { Meta, StoryObj } from '@storybook/react';
import Editor from './Editor';

const meta = {
  title: 'ui/Editor',
  component: Editor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Editor',
  args: {},
  render: (args) => (
    <div className="w-[800px]">
      <Editor className="w-full" {...args} />
    </div>
  ),
};
