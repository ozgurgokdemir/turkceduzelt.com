import { Link, Typography } from '@/components/ui';
import {
  AuthHeader,
  GoogleAuthButton,
  AuthSeperator,
  RegisterForm,
} from '@/features/auth';

function Kayit() {
  return (
    <div className="space-y-6">
      <AuthHeader
        heading="Kayıt ol"
        subheading="Hesap oluşturun ve ayrıcalıklardan faydalanın"
      />
      <GoogleAuthButton />
      <AuthSeperator />
      <RegisterForm />
      <Typography variant="body-sm" className="text-secondary">
        Zaten üye misin? <Link to="/giris">Giriş yap</Link>
      </Typography>
    </div>
  );
}

export default Kayit;
