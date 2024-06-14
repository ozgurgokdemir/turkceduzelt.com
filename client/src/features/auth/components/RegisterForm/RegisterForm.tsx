import { Button, Link, Form, Input, Typography } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerInputSchema, RegisterInput } from '@/features/auth';

function RegisterForm() {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerInputSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: RegisterInput) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="space-y-6"
      >
        <Form.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.Item className="space-y-2">
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Input placeholder="ornek@gmail.com" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.Item className="space-y-2">
              <Form.Label>Şifre</Form.Label>
              <Form.Control>
                <Input placeholder="şifre" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Typography variant="body-sm" className="text-secondary">
          Devam ederek <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          ’nı kabul etmiş olursunuz.
        </Typography>
        <Button
          type="submit"
          variant="filled"
          tone="brand"
          size="lg"
          className="w-full"
        >
          Kayıt ol
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
