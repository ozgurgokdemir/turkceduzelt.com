import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from 'lucide-react';
import { Button, Icon } from '@/components/ui';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
    tone: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button size="default" {...args}>
        <Icon
          icon={Copy}
          variant={args.tone === 'neutral' ? 'secondary' : args.tone}
          onBgFill={args.variant === 'filled'}
        />
        Button
      </Button>
      <Button size="icon" {...args}>
        <Icon
          icon={Copy}
          variant={args.tone === 'neutral' ? 'primary' : args.tone}
          onBgFill={args.variant === 'filled'}
        />
      </Button>
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledNeutral: Story = {
  args: {
    variant: 'filled',
    tone: 'neutral',
  },
};

export const FilledBrand: Story = {
  args: {
    variant: 'filled',
    tone: 'brand',
  },
};

export const FilledSuccess: Story = {
  args: {
    variant: 'filled',
    tone: 'success',
  },
};

export const FilledCritical: Story = {
  args: {
    variant: 'filled',
    tone: 'critical',
  },
};

export const OutlineNeutral: Story = {
  args: {
    variant: 'outline',
    tone: 'neutral',
  },
};

export const OutlineBrand: Story = {
  args: {
    variant: 'outline',
    tone: 'brand',
  },
};

export const OutlineSuccess: Story = {
  args: {
    variant: 'outline',
    tone: 'success',
  },
};

export const OutlineCritical: Story = {
  args: {
    variant: 'outline',
    tone: 'critical',
  },
};

export const GhostNeutral: Story = {
  args: {
    variant: 'ghost',
  },
};

export const GhostBrand: Story = {
  args: {
    variant: 'ghost',
    tone: 'brand',
  },
};

export const GhostSuccess: Story = {
  args: {
    variant: 'ghost',
    tone: 'success',
  },
};

export const GhostCritical: Story = {
  args: {
    variant: 'ghost',
    tone: 'critical',
  },
};
