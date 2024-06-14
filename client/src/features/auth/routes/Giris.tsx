import { Link, Typography } from '@/components/ui';
import {
  AuthHeader,
  GoogleAuthButton,
  AuthSeperator,
  LoginForm,
} from '@/features/auth';

function Giris() {
  return (
    <div className="space-y-6">
      <AuthHeader
        heading="Giriş yap"
        subheading="Hesabınıza erişmek için kimlik bilgilerinizi girin"
      />
      <GoogleAuthButton />
      <AuthSeperator />
      <LoginForm />
      <Typography variant="body-sm" className="text-secondary">
        Üye değil misin? <Link to="/kayit">Şimdi kayıt ol</Link>
      </Typography>
    </div>
  );
}

export default Giris;
