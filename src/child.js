import { LightningElement, api } from "lwc";


export default class Child extends LightningElement {
 @api nome;
}


/* Importar da biblioteca do LWC o api

API = permite que o atributo desejado se torne publico,
ou sejam recebe dados de fora do (pai)
Propriedade Publica

*/