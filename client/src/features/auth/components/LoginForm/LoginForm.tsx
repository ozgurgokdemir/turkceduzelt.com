import {
  Button,
  Checkbox,
  Form,
  Input,
  Link,
  Typography,
} from '@/components/ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginInputSchema, LoginInput } from '@/features/auth';

function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: true,
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
              <div className="flex items-center justify-between">
                <Form.Label>Şifre</Form.Label>
                <Typography variant="body-sm" asChild>
                  <Link to="/sifre-sifirlama">Şifreni mi unuttun?</Link>
                </Typography>
              </div>
              <Form.Control>
                <Input placeholder="şifre" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="remember"
          render={({ field }) => (
            <Form.Item className="flex items-center gap-2">
              <Form.Control>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </Form.Control>
              <Form.Label typography="body-sm" className="text-secondary">
                Beni hatırla
              </Form.Label>
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
