import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import UnderlineList from './index';

const meta = {
  title: 'ui/UnderlineList',
  component: UnderlineList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UnderlineList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'UnderlineList',
  args: {
    active: 'second',
  },
  render: ({ active: defaultValue, ...args }) => {
    const [active, setActive] = React.useState(defaultValue);

    return (
      <UnderlineList
        active={active}
        className="flex h-11 items-center gap-1 border-b border-primary"
        {...args}
      >
        <UnderlineList.Item
          value="first"
          data-state={active === 'first' ? 'active' : 'inactive'}
          onClick={() => {
            setActive('first');
          }}
          className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
        >
          First
        </UnderlineList.Item>
        <UnderlineList.Item
          value="second"
          data-state={active === 'second' ? 'active' : 'inactive'}
          onClick={() => {
            setActive('second');
          }}
          className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
        >
          Second
        </UnderlineList.Item>
        <UnderlineList.Item
          value="third"
          data-state={active === 'third' ? 'active' : 'inactive'}
          onClick={() => {
            setActive('third');
          }}
          className="flex h-full items-center px-4 text-muted transition-colors data-[state=active]:text-primary"
        >
          Third
        </UnderlineList.Item>
      </UnderlineList>
    );
  },
};
