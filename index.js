import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

console.log("Trabalhando com Programação Orientado a Objeto (POO)");

const cliente1 = new Cliente("Rosa", 965478215);
const cliente2 = new Cliente("Maria", 859631485);

const contaCorrenteRosa = new contaCorrente(1001, cliente1);
contaCorrenteRosa.depositar(900);
contaCorrenteRosa.sacar(200);

const conta2 = new contaCorrente(3502, cliente2);
conta2.sacar(50);

let valor = 200;
contaCorrenteRosa.transferir(valor, conta2);

console.log(contaCorrenteRosa);
console.log(conta2);
