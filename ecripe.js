var mensagemInicial=document.querySelector('#mensagem');
var alerta=document.querySelector('#mensagem-alerta');

    var criptografar=document.querySelector('.criptografar');
        criptografar.onclick=encriptar;

        function encriptar(){
            if(mensagemInicial.value.length==0){
                alerta.textContent='Tu não digitaste nada, então não tem nada por aqui...';
            } else{
                document.querySelector('.nada').style.display='none';
                document.querySelector('#nenhuma').innerHTML='Texto criptografado: ';

                var aSubstituir=mensagemInicial.value;
                var substituindo=aSubstituir.replace(/a/igm,'ai');
                var substituindo=substituindo.replace(/e/igm,'enter');
                var substituindo=substituindo.replace(/i/igm,'imes');
                var substituindo=substituindo.replace(/o/igm,'ober');
                var substituindo=substituindo.replace(/u/igm,'ufat');

                    alerta.textContent=substituindo;
                    alerta.setAttribute('id','texto-final');

                    document.querySelector('#botao-copiar').innerHTML='<button class="copiar" onclick="copiar()">Copiar</button>'
            }
        }

    var descriptografar=document.querySelector('.descriptografar');
        descriptografar.onclick=desencriptar;

        function desencriptar(){
            if(mensagemInicial.value.length==0){
                alerta.textContent='Tu não digitaste nada, então não tem nada por aqui...';
            } else{
                document.querySelector('.nada').style.display='none';
                document.querySelector('#nenhuma').innerHTML='Texto decifrado: ';

                var aSubstituir=mensagemInicial.value;
                var substituindo=aSubstituir.replace(/enter/igm,'e');
                var substituindo=substituindo.replace(/ai/igm,'a');
                var substituindo=substituindo.replace(/imes/igm,'i');
                var substituindo=substituindo.replace(/ober/igm,'o');
                var substituindo=substituindo.replace(/ufat/igm,'u');
                
                    alerta.textContent=substituindo;
                    alerta.setAttribute('id','texto-final');

                    document.querySelector('#botao-copiar').innerHTML='<button class="copiar" onclick="copiar()">Copiar</button>'
            }
        }

    function copiar(){
        document.querySelector('#mensagem-alerta').select(); //seleciona o texto 
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
            mensagemInicial.value='';
            mensagemInicial.focus();
    }

