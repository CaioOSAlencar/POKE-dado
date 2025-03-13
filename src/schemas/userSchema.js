import { z } from 'zod';

const UsuarioSchema = z.object({
  nome: z.string().nonempty(),
  senha: z.string().nonempty(),
  n_sorte: z.number(),
  role: z.string().optional(),
  mesa_id: z.string().optional(),
});

export { UsuarioSchema };
