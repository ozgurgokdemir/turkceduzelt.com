import type { Meta, StoryObj } from '@storybook/react';
import { EditorProvider, Editor } from '@/features/editor';

const meta = {
  title: 'features/Editor',
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
  decorators: [
    (Story) => (
      <EditorProvider>
        <Story />
      </EditorProvider>
    ),
  ],
  render: (args) => (
    <div className="w-[800px]">
      <Editor className="w-full" {...args} />
    </div>
  ),
};
