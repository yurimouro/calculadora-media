document.getElementById("novocalculo").style.display = "none";

function calcularMedia(){

    let nome = document.getElementById("nome").value;
    let disciplina = document.getElementById("disciplina").value;

    //pegando os valores difitado pelo usuario
    //e converter para numero
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    if(nome == "" || disciplina == "" || n1 == "" || n2 == "" || n3 == "" ||
      n4 == ""   ){
      alert("Preencha todos os campos")
      }

      else{
        let soma = n1 + n2 + n3 + n4;
        let media = soma / 4; 

        //verificar situação do aluno
        let situacao; //classificar se foi aprovado, recusado ou recuperaçâo
        let classeSituacao; //estilizar a cor (CSS)

        if(media >= 7){
            situacao ="APROVADO";
            classeSituacao = "aprovado";
        }
        
        else if(media >= 5){
            situacao ="EM RECUPERAÇÃO"
            classeSituacao ="recuperacao"

        }

        else{
            situacao ="REPROVADO"
            classeSituacao ="reprovado"


      }

      //
      let resultado = document.getElementById("resultado");

      resultado.innerHTML =
      "Aluno: " + nome + "<br><br>" +
      "Disciplina: " + disciplina + "<br><br>" +
      "Média: " + media + "<br><br>" +
      "Situação: <span class='" + classeSituacao + "'>" +
      situacao + "</span>";

      document.getElementById("novocalculo").style.display = "block";
      document.getElementById("calcular").style.display = "none";

}

}  

function calcularNovo(){
    //resetando os valores
    let nome = document.getElementById("nome").value = "";
    let disciplina = document.getElementById("disciplina").value = "";

    let n1 = Number(document.getElementById("nota1").value = "");
    let n2 = Number(document.getElementById("nota2").value = "");
    let n3 = Number(document.getElementById("nota3").value = "");
    let n4 = Number(document.getElementById("nota4").value = "");

    let resultado = document.getElementById("resultado")  
    .textContent = "Preencha os dados acima e clique em Calcular Média";

    document.getElementById("novocalculo").style.display = "none";
      document.getElementById("calcular").style.display = "block";


}

