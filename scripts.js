let alunos = [
    {
        nome: "Eduardo",
        email: "eduardomacedo@gmail.com",
        telefone: "(85)996414685",
        cidade: "Bela Cruz"
    },
    {
        nome: "Gleison",
        email: "Gleidson@gmail.com",
        telefone: "(85)996414685",
        cidade: "Fortaleza"
    },
    {
        nome: "Natan",
        email: "natan@gmail.com",
        telefone: "(85)996414685",
        cidade: "Fortaleza"
    }    
];

function listarAluno(){
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";

    for(let i = 0; i < alunos.length; i++){
        tabela.innerHTML += `<tr>
                            <td>${alunos[i].nome}</th>
                            <td>${alunos[i].email}</td>
                            <td>${alunos[i].telefone}</td>
                            <td>${alunos[i].cidade}</td>
                            <td> 
                                <button class="btn btn-warning">Editar</button>
                                <button class="btn btn-danger">Deletar</button>
                            </td>
                        </tr>`
}
}



function adcionarAluno(){
    event.preventDefault();
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    alunos.push (aluno);
    listarAluno();
}
