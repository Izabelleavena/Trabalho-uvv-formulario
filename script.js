

function validar (e){
    const nome = document.getElementById('nome').value
    const inputNome = document.getElementById('nome')
    if(nome == '' || nome.split(' ').length <2 || nome.length <4){
       
        document.getElementById('msg1').innerHTML = "<font color='red'>Nome inválido: Lembre-se, nome e sobrenome.</font>";
        inputNome.style.borderColor = 'red';
        return false
    }else{
        document.getElementById('msg1').innerHTML ="<font color='green'>Nome válido</font>";
        inputNome.style.borderColor = 'green';
        return true
    
    }
} 


nome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    //para que server o "?" e o wich.
 if( keyCode >33 && keyCode <65){
     e.preventDefault();

}
});

//if ternário facilita e resume o if e else 

function validarEmail(){
    const email = document.getElementById('email').value
    const  usuario = email.substring(0,email.indexOf('@'));
    const  dominio = email.substring(email.indexOf('@')+1);
    const  ponto = dominio.substring(dominio.indexOf('.')+1);
    const  ponto2 = dominio.substring(0, dominio.indexOf('.'));
    const inputEmail = document.getElementById('email')
    
    
   
    if ((usuario.length <3)||
    (!dominio.includes('.'))||
    (!email.includes('@'))||
    (usuario == '')||
    (dominio == '')||
    (ponto.length <2)||
    (ponto2.length <3)){
    
        
        document.getElementById('msg2').innerHTML = "<font color='red'>E-mail inválido: O campo email deve ser nessa estrutura aa@aa.aa!</font>";
        inputEmail.style.borderColor = 'red';
        return false
        
    }else{
        document.getElementById('msg2').innerHTML ="<font color='green'>E-mail válido</font>";
        inputEmail.style.borderColor = 'green';
        return true

    }
      
}



function validarTel(telefone){
    
    const telefoneAtual= telefone.value;
    const celular = telefoneAtual.length == 12;
    const casa = telefoneAtual.length ==11;
    let textoAjustado;
    const inputNumero= document.getElementById('telefone');
    
    if(celular){
        const parte1 = telefoneAtual.slice(0,2);
        const parte2 = telefoneAtual.slice(2,8);
        const parte3 = telefoneAtual.slice(8,12);
        
       textoAjustado = `(${parte1}) ${parte2}-${parte3}`;
       document.getElementById('msg3').innerHTML ="<font color='green'>Telefone válido</font>";
       telefone.value = textoAjustado;
       inputNumero.style.borderColor = 'green';
       return true
       
    }else if(casa){
        const parte1 = telefoneAtual.slice(0,2);
        const parte2 = telefoneAtual.slice(2,7);
        const parte3 = telefoneAtual.slice(7,11);
       textoAjustado = `(${parte1}) ${parte2}-${parte3}`;
       document.getElementById('msg3').innerHTML ="<font color='green'>Telefone válido</font>";
       telefone.value = textoAjustado;
       inputNumero.style.borderColor = 'green';
       return true
       
    }else{
        
        document.getElementById('msg3').innerHTML = "<font color='red'>Telefone inválido: Somente números!</font>";
        inputNumero.style.borderColor = 'red';
        telefone.value = textoAjustado;
        return false
        

    }
    
}


function tirarHifen(telefone){
    const textoAtual= telefone.value;
    const textoAjustado = textoAtual.replace(/\-/g,'');
   

    telefone.value = textoAjustado;
}


function validarSenha(){
    const senha = document.getElementById('senha').value;
    const inputSenha = document.getElementById('senha');
    let maiusculo =/[A-Z]/
    let minuscula =/[a-z]/
    let especial =/[*|!|?|+|-|/|-|=]/
    let numero = /[0-9]/ 

    if((senha.length >9)&&
    (maiusculo.test(senha))&&
    (minuscula.test(senha))&&
    (especial.test(senha))&&
    (numero.test(senha))){
        document.getElementById('msg4').innerHTML ="<font color='green'>Senha válida</font>";
        inputSenha.style.borderColor = 'green';
        return true
    }else{
      
        document.getElementById('msg4').innerHTML = "<font color='red'>Deve possuir: LETRA MAIUSCULA, minuscula, caracter especial e número!</font>";
        inputSenha.style.borderColor = 'red';
        return false
    }
}

document.getElementById('olho').addEventListener('mousedown', function(){
    document.getElementById('senha').type='text';
});

document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('senha').type = 'password';
  });
  

function validarConfirmarSenha(){
    
    const confirmarsenha = document.getElementById('confirmarsenha').value;
    const confirmarsenhaInput = document.getElementById('confirmarsenha');

    const senha = document.getElementById('senha').value;

    if(confirmarsenha == senha && confirmarsenha != ''){
        document.getElementById('msg5').innerHTML ="<font color='green'>Senha válida</font>";
        confirmarsenhaInput.style.borderColor = 'green';

        return true

    }else{
        confirmarsenhaInput.style.borderColor = 'red';
        document.getElementById('msg5').innerHTML = "<font color='red'>As senhas devem ser iguais!</font>";
        return false
    }
}

document.getElementById('olhos').addEventListener('mousedown', function(){
    document.getElementById('confirmarsenha').type='text';
});

document.getElementById('olhos').addEventListener('mouseup', function() {
    document.getElementById('confirmarsenha').type = 'password';
  });




function validarCadastro(){
    if ((validar())&&
    (validarEmail())&&
    (!validarTel(telefone))&&
    (validarSenha())&&
    (validarConfirmarSenha())&&
    !validacep(cep)){
       /* document.getElementById('formulario').submit();*/
      document.getElementById('botaosucesso').style = "display: block"

    }else{
        document.getElementById('botaoErro').style = "display: block"
    }

    
}


function limpar_formulario(){
    //limpando o formulário
  
    document.getElementById('rua').value = ('');
    document.getElementById('bairro').value = ('');
    document.getElementById('cidade').value = ('');
    document.getElementById('estado').value = ('');
}

function retorno(conteudo){
    if(!("erro" in conteudo)){
        //atualizando os valores dos campos
   
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('estado').value = (conteudo.uf);
    }else{
        limpar_formulario();
        alert('Não foi posssivel encontrar o endereço.');
        inputDisabled.forEach(item => {
          
            item.disabled = false;
        });
    }
    
}

function pesquisarCep(valor){

    //criando uma nova váriavel com cep
    let cep = valor.replace(/\D/g, '');
    let inputCep= document.getElementById('cep');
    if (cep != ""){
        let validacep = /^[0-9]{8}$/

        if(validacep.test(cep)){
        document.getElementById('rua').value = "...";
        document.getElementById('bairro').value =  "...";
        document.getElementById('cidade').value =  "...";
        document.getElementById('estado').value =  "...";
             
        let script = document.createElement('script');

        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=retorno';

        document.body.appendChild(script);
        document.getElementById('msg6').innerHTML ="<font color='green'>CEP válido</font>"
        inputCep.style.borderColor = 'green';
        desabilita(cep);
        }else{
            
            alert('Formato de Cep inválido')
            document.getElementById('msg6').innerHTML = "<font color='red'>O CEP deve conter 8 digitos, e apenas números.</font>"
            inputCep.style.borderColor = 'red';
            limpar_formulario();
        }
    }else{
        limpar_formulario();
    }
}

let inputDisabled = document.querySelectorAll('.inputD');

function desabilita(cep){

    if(cep != ""){
        inputDisabled.forEach(item => {
          
            item.disabled = true;
        });
    }else{
        inputDisabled.forEach(item => {
            
            item.disabled = false;
        });
    }
}


function validacep(cep){
    let inputCep= document.getElementById('cep');
    if(cep == ''){
        alert('Preencha o campo de CEP.')
        inputCep.style.borderColor = 'red';
    }else{

    }

}