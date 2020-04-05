
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("botaomsg").addEventListener("click",enviaMSG);
    document.getElementById("msg").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            enviaMSG();
        }
    });
}, false);

function enviaMSG(){

    var mensagem = document.getElementById("msg").value;
    if(mensagem.trim() !== ''){
      
      document.getElementById("msg").value = '';
      var container = document.createElement("div");
      container.classList.add("message-item");
      var toRight = document.createElement("div");
      toRight.classList.add("message-usuario-dir");
      var from = document.createElement("p");
      var italico = document.createElement("b");
      from.innerHTML = "Você diz:";

      var msgContainer = document.createElement("div");  
      msgContainer.classList.add("message-usuario-dir");  
      var msg = document.createElement("p");
      msg.classList.add("mensagemtextoDir");   
      msg.innerHTML = mensagem; 

      container.appendChild(toRight);
      italico.appendChild(from);
      toRight.appendChild(italico);
      container.appendChild(msgContainer);
      msgContainer.appendChild(msg);
      document.getElementById("conteinermsg").appendChild(container);
      var objDiv = document.getElementById("conteinermsg");
      objDiv.scrollTop = objDiv.scrollHeight;
    }else{
        alert('Não é possivel enviar mensagem em branco!');
    }
} 

