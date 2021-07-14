$(document).ready(function(){
  $('#loginAluno').submit(function(event){
    // Testar se o usuário e a senha estão corretos
    if($('#inputUsuario').val() == "root" && $('#inputSenha').val() == '1234'){
      //condição verdadeira
      $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
      $('#mensagem').removeClass('alert-warning')
      $('#mensagem').text("Usuário Logado!").show().fadeOut(3000)
      event.preventDefault() // bloqueia o evento de submit
    } else {
      //condição falsa
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text('Usuário ou Senha inválida!').show().fadeOut(3000)
      event.preventDefault() // bloqueia o evento de submit
    }
  })
})