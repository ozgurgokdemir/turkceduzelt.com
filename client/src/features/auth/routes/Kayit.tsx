import { AuthPanel, RegisterForm } from '@/features/auth';

function Kayit() {
  return (
    <AuthPanel
      heading="Kayıt ol"
      subheading="Hesap oluşturun ve ayrıcalıklardan faydalanın"
      form={RegisterForm}
      footerText="Zaten üye misin?"
      footerLink={{ to: '/giris', text: 'Giriş yap' }}
    />
  );
}

export default Kayit;
