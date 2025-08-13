import { DomHandler } from "./DomHandler.js";
import Medico from "./Medico.js";
import Paciente from "./Paciente.js";

let medicos=[];
let pacientes=[];

//buscar informações em bancos de dados
async function carregarDados() {
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

 function formataData(data) {
    const[ano,mes,dia]=data.split("-");
    return `${dia}/${mes}/${ano}` 
 }

function agendarConsulta() {
    const $paciente=document.getElementById("selectPaciente").value;
    const $medico=document.getElementById("selectMedico").value;
    const $data=document.getElementById("inputDate").value;

    if(!$data ||!$medico || !$paciente){
        alert("Por favor, selecionar um paciente, um médico e uma data!")
    }

    //Validação de informações
    const paciente=pacientes.find(p=>p.nome=== $paciente);
    const medico=medicos.find(m=>m.nome===$medico);

    if(paciente && medico){
        medico.agendarConsulta(paciente,formataData($data)).then((mensagem)=>{
        DomHandler.exibirConsulta(mensagem);
        });    
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    carregarDados();
    document.getElementById("btnAgendar").addEventListener("click",agendarConsulta)
})

