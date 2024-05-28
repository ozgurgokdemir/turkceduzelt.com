import {
  AuthHeader,
  GoogleAuthButton,
  AuthSeperator,
  LoginForm,
  SwitchAuthLink,
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
      <SwitchAuthLink
        question="Üye değil misin?"
        link={{ to: '/kayit', text: 'Şimdi kayıt ol' }}
      />
    </div>
  );
}

export default Giris;
