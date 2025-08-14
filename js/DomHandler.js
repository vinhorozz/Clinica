export class DomHandler{
    static atualizarLista(lista,elemento,textoPadrao){
        const selectList=document.getElementById(elemento);
        selectList.innerHTML=textoPadrao
            lista.forEach(item=>{
                const option=document.createElement("option");
                option.value=item.nome;
                option.textContent=item.nome;
                selectList.appendChild(option)
                });        
   }

   static exibirConsulta(mensagem){
        //pegar o elemento da página
        const listaConsulta=document.getElementById("listaConsultas");
        //Evitar repetição de valores na lista
        const valoresExistentes=Array.from(listaConsulta.getElementsByTagName("li"));
        const encontrado=valoresExistentes.some(li=> li.textContent.includes(mensagem));
        if (encontrado){
            alert ("Essa consulta já foi agendada")
            return
        }

        //criar o elemento que será filho do elemento acima
        const li=document.createElement("li");
        li.classList.add("consulta-item");
        li.textContent=mensagem;

        //Criar btn-Cancelar
        const btnCancelar=document.createElement("button");
        btnCancelar.textContent="Cancelar";
        btnCancelar.classList.add("btn-cancelar");

        //adicionar evento Remover a consulta ao botão
        btnCancelar.addEventListener("click",()=>{li.remove();})
        //adiciona o botão como filho do item da lista
        li.appendChild(btnCancelar);
        //adicionar o item como filho do elemento da página
        listaConsulta.appendChild(li);
   }
}

/*
É mais correto e recomendado usar o princípio da reutilização. Criar um método genérico e reutilizável (como atualizarLista) torna o código mais limpo, fácil de manter e reduz duplicação. Só crie métodos separados se houver lógica muito específica para cada campo que não possa ser generalizada.

Usar uma classe com métodos static em JavaScript é útil quando você quer agrupar funções relacionadas sem precisar criar instâncias dessa classe. Veja os principais motivos:

•Organização do código
Métodos estáticos ajudam a organizar funções utilitárias sob um mesmo "nome" (a classe), facilitando a manutenção e leitura do código.

•Sem necessidade de instanciar
Você não precisa criar um objeto da classe para usar os métodos. Basta chamar, por exemplo, DomHandler.atualizarListaPaciente(pacientes).

•Não dependem de estado interno
Métodos estáticos geralmente não usam ou modificam propriedades da instância (this). Eles apenas recebem parâmetros e executam uma ação.

•Evita poluir o escopo global
Em vez de criar várias funções soltas, você agrupa tudo em uma classe, evitando conflitos de nomes.

Exemplo prático:
No seu código, DomHandler agrupa funções que manipulam o DOM para listas de pacientes e médicos. Como essas funções não precisam de dados internos da classe, faz sentido serem estáticas.

Resumo:
Use métodos estáticos quando quiser funções utilitárias agrupadas, sem necessidade de criar objetos. Isso deixa o código mais limpo e fácil de usar.*/