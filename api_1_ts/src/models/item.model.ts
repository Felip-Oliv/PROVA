import { Cadastro } from "./cadastro.model";

export interface Item {
  cadastro?: Cadastro;
  valor?: number;
  horas?: number;
  calculoId?: string;
}
