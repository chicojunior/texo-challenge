export enum UnidadeMedida {
  litro = 1,
  quilograma = 2,
  unidade = 3
}

export class Item {
  constructor() {}

  nomeItem: string;
  unidadeDeMedida: UnidadeMedida;
  quantidade: number;
  preco: number;
  perecivel: boolean;
  dataValidade: Date;
  dataFabricacao: Date;
}
