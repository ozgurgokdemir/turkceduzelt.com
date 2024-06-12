import { z } from 'zod';

export const loginInputSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email alanı boş bırakılamaz' })
    .email({ message: 'Email geçerli değil' }),
  password: z
    .string()
    .min(1, { message: 'Şifre alanı boş bırakılamaz' })
    .min(8, { message: 'Şifre en az 8 karakter olmalı' }),
  remember: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
