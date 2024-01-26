import { Platform } from 'react-native';

export const productSkus = Platform.select({
  android: [
    'o_nome_do_vento',
    'a_roda_do_tempo',
    'o_senhor_dos_aneis',
    'o_feiticeiro_de_terramar',
    'as_cronicas_de_gelo_e_fogo',
    'o_livro_malazano_dos_caidos',
  ],
});
