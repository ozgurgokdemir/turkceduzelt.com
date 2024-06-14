import { z } from 'zod';

export const registerInputSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email alanı boş bırakılamaz' })
    .email({ message: 'Email geçerli değil' }),
  password: z
    .string()
    .min(1, { message: 'Şifre alanı boş bırakılamaz' })
    .min(8, { message: 'Şifre en az 8 karakter olmalı' }),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const loginInputSchema = registerInputSchema.extend({
  remember: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
