// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

function adicionarAluno(nome){
 
/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

alunosDaEscola.push({nome: nome, notas: [], cursos: [], faltas: 0});
console.log(`O aluno ${nome} foi adicionado com sucesso.`);

}

function listarAlunos(){

/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

alunosDaEscola.forEach( aluno => {
    console.log("=".repeat(10) + "\n" + "Nome: " + aluno.nome + "\n" + "Notas: " + aluno.notas);
    if (aluno.cursos.length != 0) {
        aluno.cursos.forEach( curso => {
            console.log("Nome do Curso: " + curso.nomeDoCurso + "\n" + "Data da Matricula: " + curso.dataMatricula.toDateString() + "\n" + "Faltas: " + aluno.faltas);
        })
    } else {
        console.log("Cursos: " + aluno.cursos + "\n" + "Faltas: " + aluno.faltas);
    }
})

}

function buscarAluno(nome){

/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar.
E deverá devolver um aluno em seu retorno. */

for (let aluno of alunosDaEscola) {
    if (aluno.nome == nome) {
        console.log("Aluno encontrado com sucesso.");
        return aluno;
    }
}
console.log("Aluno não encontrado");

}

function matricularAluno(aluno, curso){

/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */

    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (aluno.nome == alunosDaEscola[i].nome) {
            alunosDaEscola[i].cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
            console.log(`Aluno ${aluno.nome} matriculado com sucesso no curso ${curso}.`);
        }
    }
}

function aplicarFalta(aluno){

/*
Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. 
Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/

    if (aluno.cursos.length > 0) {
        alunosDaEscola.forEach( aluno1 => {
            if (aluno1.nome == aluno.nome) {
                aluno1.faltas++;
                console.log(`Aluno ${aluno1.nome} recebeu a falta com sucesso. Total: ${aluno1.faltas}`);
            }
        })
    } else {
        console.log("Aluno não matriculado em cursos.");
    }
}

function aplicarNota(aluno, nota){

/*
Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas.
Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/

    if (aluno.cursos.length > 0) {
        for (let aluno1 of alunosDaEscola) {
            if (aluno1.nome == aluno.nome) {
                aluno1.notas.push(nota);
                console.log(`Aluno ${aluno1.nome} recebeu a nota com sucesso.`);
            }
        }
    } else {
        console.log("Aluno não matriculado em cursos.");
    }
}

function aprovarAluno(aluno){

/* 
Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/

    if (aluno.cursos.length > 0) {
        for (let i = 0; i < alunosDaEscola.length; i++) {
            if (aluno.nome == alunosDaEscola[i].nome) {
                let soma = alunosDaEscola[i].notas.reduce((acum, nota) => {
                    return acum + nota;
                });
                let media = soma / alunosDaEscola[i].notas.length;

                if (alunosDaEscola[i].faltas <= 3 && media >= 7) {
                    console.log(`Aluno ${aluno.nome} foi aprovado com ${alunosDaEscola[i].faltas} faltas e média ${media}.`);
                } else {
                    console.log(`Aluno ${aluno.nome} foi reprovado com ${alunosDaEscola[i].faltas} faltas e média ${media}.`);
                }
            }
        }
    } else {
        console.log("Aluno não matriculado em cursos.");
    }
}