import * as yup from 'yup';
import { InferType } from 'yup';

// ---------------------------------------------------- //

export const userEmailParamSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
}).noUnknown(true, 'Campos extras não são permitidos');

export const createUserBodySchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
}).noUnknown(true, 'Campos extras não são permitidos');

export const updateUserBodySchema = yup.object({
  name: yup.string(),
  password: yup.string(),
}).noUnknown(true, 'Campos extras não são permitidos');

export type UserEmailParamDTO = InferType<typeof userEmailParamSchema>;
export type CreateUserDTO = InferType<typeof createUserBodySchema>;
export type UpdateUserDTO = InferType<typeof updateUserBodySchema>;
