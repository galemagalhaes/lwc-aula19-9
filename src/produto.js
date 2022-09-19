import { LightningElement, api } from "lwc";

export default class Produto extends LightningElement {
 @api produto;
 @api preco;
 
}

/* Crie duas propriedades publicas

    nome e preço, mostrar os seus valores no produto.html
      3x com valores e produtos diferentes


    1 - importar o API
    2 - Criar as props em @api
    3 - Exibir as props no HTML {prop}
    4 - Chamar o componente no pai com os atributos

  */