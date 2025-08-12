import { DomHandler } from "./DomHandler.js";
import Medico from "./Medico.js";
import Paciente from "./Paciente.js";

let medicos=[];
let pacientes=[];

async function loadData() {
    try{
        const responseDoc=await fetch("./data/doctors.json");
        const responsePatient=await fetch("./data/patients.json");        
        const DocsData= await responseDoc.json();
        const patData=await responsePatient.json();

        medicos=DocsData.map((medico)=> new Medico(
            medico.nome,medico.idade,medico.cpf,medico.especialidade));
        pacientes=patData.map(({nome,idade,cpf})=>new Paciente(nome,idade,cpf));

        //Atualiza a interface
        DomHandler.atualizarLista(pacientes,"selectPaciente",`<option value="">--Selecione um paciente--</option>`);
        DomHandler.atualizarLista(medicos,"selectMedico",'<option value="">--Selecione um médico--</option>');
    }catch(error){
        console.error("Erro ao carregar dados: ",error);
    }
}

loadData();
