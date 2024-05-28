import { Button, Form, Input, Typography } from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginInputSchema, LoginInput } from '@/features/auth';
import { Link } from 'react-router-dom';

function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: LoginInput) {
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
            <Form.Item>
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
            <Form.Item>
              <div className="flex items-center justify-between">
                <Form.Label>Şifre</Form.Label>
                <Typography variant="body-sm" asChild>
                  <Link
                    to="/sifre-sifirla"
                    className="text-brand hover:underline"
                  >
                    Şifreni mi unuttun?
                  </Link>
                </Typography>
              </div>
              <Form.Control>
                <Input placeholder="şifre" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button
          type="submit"
          variant="filled"
          tone="brand"
          size="lg"
          className="w-full"
        >
          Giriş yap
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
