import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta = {
  title: 'ui/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'body-md',
  },
  argTypes: {
    variant: {
      control: 'select',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: {
    variant: 'display',
    asChild: true,
  },
  render: (args) => (
    <Typography {...args}>
      <h1>Display</h1>
    </Typography>
  ),
};

export const Heading4XL: Story = {
  args: {
    variant: 'heading-4xl',
    asChild: true,
  },
  render: (args) => (
    <Typography {...args}>
      <h1>Heading 4xl</h1>
    </Typography>
  ),
};

export const Heading3XL: Story = {
  args: {
    variant: 'heading-3xl',
    asChild: true,
  },
  render: (args) => (
    <Typography {...args}>
      <h2>Heading 3xl</h2>
    </Typography>
  ),
};

export const Heading2XL: Story = {
  args: {
    variant: 'heading-2xl',
    asChild: true,
  },
  render: (args) => (
    <Typography {...args}>
      <h3>Heading 2xl</h3>
    </Typography>
  ),
};

export const HeadingXL: Story = {
  args: {
    variant: 'heading-xl',
    asChild: true,
  },
  render: (args) => (
    <Typography {...args}>
      <h4>Heading xl</h4>
    </Typography>
  ),
};

export const BodyLG: Story = {
  args: {
    variant: 'body-lg',
  },
  render: (args) => <Typography {...args}>Body lg</Typography>,
};

export const BodyMD: Story = {
  args: {
    variant: 'body-md',
  },
  render: (args) => <Typography {...args}>Body md</Typography>,
};

export const BodySM: Story = {
  args: {
    variant: 'body-sm',
  },
  render: (args) => <Typography {...args}>Body sm</Typography>,
};

export const BodyXS: Story = {
  args: {
    variant: 'body-xs',
  },
  render: (args) => <Typography {...args}>Body xs</Typography>,
};
