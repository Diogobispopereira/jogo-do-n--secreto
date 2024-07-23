 //javaScripts ler linha por linha
   
let listaDeNumeroSorteado = [];   
let numeroTentativa = 20;
let numeroSecreto =  geradorDeNumero();
let tentativas = 1;
   //primeira forma de usar o h1 1 p 

   /*let titulo = document.querySelector('h1');
      titulo.innerHTML = 'jogo do número secreto!';

      let paragrafo = document.querySelector('p');
      titulo.innerHTML = 'Faça sua escolha entre 1 e 10!' 
*/

//segunda forma de usar o h1 e p para exibir na tela
//evita codigo repetido  
      function textoExibidoNaTela  (tags, texto) {
        let campo = document.querySelector(tags);
        campo.innerHTML =  texto;
        //isso ativa a voz para falar no layout
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate:1.2});
      };


          function exibirtexto() {
            //agora é so subtituir as tags por seletores: h1 e p entre outros 
            textoExibidoNaTela('h1','Jogo do Número secreto!');
            textoExibidoNaTela('p' , 'Escolha entre 1 a 20...' );
          }
          //permitirá que editemo em 1 lugar só
    exibirtexto();
 //está função tem que ter o mesmo nome que estar no botão do onclik chutar
                    function verificarChute () {
                      //tem que ter o value para pegar o valor do input
                      let chute = document.querySelector('input').value;

                        if(chute == numeroSecreto){
                          textoExibidoNaTela('h1', 'Acertou');

                          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                          let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}!`;
                            textoExibidoNaTela('p', mensagemTentativa);

                            //ativar o botao de reiniciar que tem o nome de 'Novo jogo' que por padrao fica desativado
                            document.getElementById('reiniciar').removeAttribute('disabled');
                        } else{
                            //o else é senão
                            if(chute > numeroSecreto){
                              textoExibidoNaTela('p', 'o número secreto é menor');
                            }else{
                              textoExibidoNaTela('p', 'o número secreto é maior');
                            }
                            //tentativas = tentativas + 1
                            tentativas++;
                            
                            limparCampo();
                          }
                    }
                  //gera numeros inteiros
                function geradorDeNumero () {
                  let numeroEscolhido = parseInt(Math.random() * numeroTentativa + 1);
                      //length é quantidade de elementos da lista
                     let quantidadeDeNumerosEscolhidos = listaDeNumeroSorteado.length;
                  if(quantidadeDeNumerosEscolhidos == numeroTentativa){
                        listaDeNumeroSorteado = [];
                  };
                  // includes quer dizer que se o elemento ja estiver na lista ele é verdadeiro ou se ta na lista ou nao
                  if(listaDeNumeroSorteado.includes(numeroEscolhido)){
                     return geradorDeNumero();
                  }else{
                     //push ele adciona algo ao final da lista
                   listaDeNumeroSorteado.push(numeroEscolhido);
                   console.log(listaDeNumeroSorteado);
                      return numeroEscolhido;
                     }
                }
// essa função ira limpar o campo do imput\\
          function limparCampo() {
                let chute = document.querySelector('input');
                chute.value = '';
          }

      function reiniciarJogo() {
        numeroSecreto = geradorDeNumero();
        tentativas = 1;
        exibirtexto();
        limparCampo();
        document.getElementById('reiniciar').setAttribute('disabled', true);
      }
  //tipo booleano: verdadeiro ou false