import { z } from 'zod';

const UsuarioSchema = z.object({
  nome: z.string().nonempty(),
  email: z.string().email(),
  senha: z.string().nonempty(),
  mestre: z.boolean(),
  N_SORTE: z.number(),
});

export { UsuarioSchema };
