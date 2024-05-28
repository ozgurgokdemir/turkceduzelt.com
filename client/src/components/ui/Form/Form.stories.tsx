import type { Meta, StoryObj } from '@storybook/react';
import Form from './index';
import { Input, Button } from '@/components/ui';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const meta = {
  title: 'ui/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export const Default: StoryObj = {
  name: 'Form',
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className="space-y-8"
        >
          <Form.Field
            control={form.control}
            name="username"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Username</Form.Label>
                <Form.Control>
                  <Input placeholder="Rawthul" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
