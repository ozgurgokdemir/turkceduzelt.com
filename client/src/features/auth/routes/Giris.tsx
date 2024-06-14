import { AuthPanel, LoginForm } from '@/features/auth';

function Giris() {
  return (
    <AuthPanel
      heading="Giriş yap"
      subheading="Oturum açmak için kullanıcı bilgilerinizi girin"
      form={LoginForm}
      footerText="Üye değil misin?"
      footerLink={{ to: '/kayit', text: 'Şimdi kayıt ol' }}
    />
  );
}

export default Giris;
