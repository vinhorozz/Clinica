import Pessoa from "./Pessoa.js";

export default class Paciente extends Pessoa{
    constructor(nome,idade,cpf){
        super(nome,idade, cpf)
    }


}