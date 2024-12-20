   function rolarParaPrimeiraSection() {
      const primeiraSection = document.querySelector('.primeira-section');
      
      // Rolando suavemente até a primeiraSection
      primeiraSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    function rolarParaSegundaSection() {
      const segundaSection = document.querySelector('.segunda-section');
      
      // Rolando suavemente até a segundaSection
      segundaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // ou 'end' para rolar até o final
      });
    }

    function rolarParaTerceiraSection() {
      const terceiraSection = document.querySelector('.terceira-section');
      
      // Rolando suavemente até a terceiraSection
      terceiraSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    function rolarParaQuartaSection() {
      const quartaSection = document.querySelector('.quarta-section');
      
      // Rolando suavemente até a quartaSection
      quartaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    function rolarParaQuintaSection() {
      const quintaSection = document.querySelector('.quinta-section');
      
      // Rolando suavemente até a quartaSection
      quintaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }


    function rolarParaSextaSection() {
      const sextaSection = document.querySelector('.sexta-section');
      
      // Rolando suavemente até a quartaSection
      sextaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

     function rolarParaSétimaSection() {
      const sétimaSection = document.querySelector('.sétima-section');
      
      // Rolando suavemente até a quartaSection
      sétimaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }


// FUNÇÕES PARA A PRIMEIRA SECTION ---------------------///

// Definindo valores iniciais para os inputs de cor
document.getElementById("bg-color").value = "#000000"; // Preto
document.getElementById("white-color").value = "#EAEAEA"; // Cinza
document.getElementById("btn-color").value = "#007bff"; // Azul
document.getElementById("navbar-color").value = "#000000"; // Preto

function mudarCoresFundo() {
  const bgInput = document.getElementById('bg-color');
  const blackSection = document.querySelector('.black-section');
  const screen = document.querySelector('.iphone .screen');
  blackSection.style.backgroundColor = bgInput.value;
  screen.style.backgroundColor = bgInput.value;
}

function mudarCoresFundoBotões() {
  const whiteInput = document.getElementById('white-color');
  const whiteSection = document.querySelector('.white-section');
  whiteSection.style.backgroundColor = whiteInput.value;
}

function mudarCoresBotões() {
  const btnInput = document.getElementById('btn-color');
  const buttons = document.querySelectorAll('.barbeiro-button, .cliente-button');
  buttons.forEach(button => {
      button.style.backgroundColor = btnInput.value;
  });
}

function mudarCoresNavbar() {
  const navbarInput = document.getElementById('navbar-color');
  const navbar = document.querySelector('.navbar');
  navbar.style.backgroundColor = navbarInput.value;
}

function mudarLogo() {
  const logoInput = document.getElementById('logo');
  if (logoInput.files && logoInput.files[0]) {
      const reader = new FileReader();
      const logoImage = document.querySelector('.black-section img');
      reader.onload = function(e) {
          logoImage.src = e.target.result;
      }
      reader.readAsDataURL(logoInput.files[0]);
  }
}

// FUNÇÕES PARA A SEGUNDA SECTION  //

// Definindo valores iniciais para os inputs de cor
document.getElementById("cf-color").value = "#000000"; // Preto
document.getElementById("ct-color").value = "#ffffff"; // Branco
document.getElementById("cb-color").value = "#007bff"; // Azul


function mudarCorDeFundo() {
  const cfColorInput = document.getElementById('cf-color');
  const screen = document.querySelector('.segunda-section .screen');
  screen.style.backgroundColor = cfColorInput.value;
}

function mudarCorTexto() {
  const ctColorInput = document.getElementById('ct-color');
  const screenContent = document.querySelector('.segunda-section .screen-content h1');
  screenContent.style.color = ctColorInput.value;
}

function mudarCorBotao() {
  const cbColorInput = document.getElementById('cb-color');
  const buttons = document.querySelectorAll('.segunda-section .button');
  buttons.forEach(button => {
      button.style.backgroundColor = cbColorInput.value;
  });
}

function escolherImagem() {
  const input = document.getElementById('primeira-imagem');
  const imageContainer = document.getElementById('imagem2');
  
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
      const imageUrl = e.target.result;
      const image = imageContainer.querySelector('img');
      image.src = imageUrl;
  }

  reader.readAsDataURL(file);
}



function escolherSegundaImagem() {
  const input = document.getElementById('segunda-imagem');
  const imageContainer = document.getElementById('imagem4');
  
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
      const imageUrl = e.target.result;
      const image = imageContainer.querySelector('img');
      image.src = imageUrl;
  }

  reader.readAsDataURL(file);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------//


// FUNÇÕES PARA A TERCEIRA SECTION  //

  function alterarImagens() {
    var select = document.getElementById("tipo-de-site");
    var tipoSelecionado = select.options[select.selectedIndex].value;
    var imagens = document.getElementsByClassName("itens");
    
    switch(tipoSelecionado) {
      case "Barbearia":
        imagens[0].src = "https://cdn-icons-png.flaticon.com/128/1802/1802292.png";
        imagens[1].src = "https://cdn-icons-png.flaticon.com/128/1384/1384023.png";
        imagens[2].src = "https://cdn-icons-png.flaticon.com/128/5672/5672465.png";
        imagens[3].src = "https://cdn-icons-png.flaticon.com/128/8299/8299807.png";
        imagens[4].src = "https://cdn-icons-png.flaticon.com/128/55/55256.png";
        break;
      case "Beleza":
        imagens[0].src = "https://cdn-icons-png.flaticon.com/128/40/40739.png";
        imagens[1].src = "https://cdn-icons-png.flaticon.com/128/1384/1384023.png";
        imagens[2].src = "https://cdn-icons-png.flaticon.com/128/6767/6767477.png";
        imagens[3].src = "https://cdn-icons-png.flaticon.com/128/8299/8299807.png";
        imagens[4].src = "https://cdn-icons-png.flaticon.com/128/55/55256.png";
        break;
      case "Clínica":
        imagens[0].src = "https://cdn-icons-png.flaticon.com/128/4526/4526826.png";
        imagens[1].src = "https://cdn-icons-png.flaticon.com/128/1384/1384023.png";
        imagens[2].src = "https://cdn-icons-png.flaticon.com/128/294/294572.png";
        imagens[3].src = "https://cdn-icons-png.flaticon.com/128/8299/8299807.png";
        imagens[4].src = "https://cdn-icons-png.flaticon.com/128/55/55256.png";
        break;
      default:
        // Caso padrão
        break;
    }
  }




// Definindo valores iniciais para os inputs de cor
document.getElementById("cfg-color").value = "#d6d6d6"; // Cinza Escuro
document.getElementById("caa-color").value = "#FFD700"; // Amarelo
document.getElementById("cbt-color").value = "#007bff"; // Azul



function mudarCorFundoTerceira() {
  const cfgColorInput = document.getElementById('cfg-color');
  const screen = document.querySelector('.terceira-section .screen');
  screen.style.backgroundColor = cfgColorInput.value;
}

function mudarCorFundoImagensTerceira() {
  const caaColorInput = document.getElementById('caa-color');
  const images = document.querySelectorAll('.terceira-section img');
  images.forEach(image => {
      image.style.backgroundColor = caaColorInput.value;
  });
}

function mudarCorBotõesTerceira() {
  const cbtColorInput = document.getElementById('cbt-color');
  const buttons = document.querySelectorAll('.botão-terceira');
  buttons.forEach(button => {
      button.style.backgroundColor = cbtColorInput.value;
  });
}



///------------------------------------------------



//-------------------------------------------------------------------------------------------------///////////////////////////////




//--------------------FUNÇÕES PARA A QUARTA SECTION -----------------------------------------------/////

// Definindo valores iniciais para os inputs de cor
document.getElementById("www-color").value = "#f2f2f2"; // Branco
document.getElementById("aaa-color").value = "#fff"; // Branco
document.getElementById("bbb-color").value = "#333"; // Cinza Escuro
document.getElementById("ccc-color").value = "#000000"; // Preto
document.getElementById("ddd-color").value = "#007bff"; // Azul

function mudarCorFundoQuarta() {
  const wwwColorInput = document.getElementById('www-color');
  const screen = document.querySelector('.quarta-section .screen');
  screen.style.backgroundColor = wwwColorInput.value;
}

function mudarCorFundoElementosQuarta() {
  const aaaColorInput = document.getElementById('aaa-color');
  const images = document.querySelectorAll('.quarta-section .login-container');
  images.forEach(image => {
      image.style.backgroundColor = aaaColorInput.value;
  });
}

function mudarCorTítuloQuarta() {
  const bbbColorInput = document.getElementById('bbb-color');
  const titles = document.querySelectorAll('.quarta-section h2');
  titles.forEach(title => {
      title.style.color = bbbColorInput.value;
  });
}


function mudarCorTextoQuarta() {
  const cccColorInput = document.getElementById('ccc-color');
  const labels = document.querySelectorAll('.quarta-section #TextoLabel');
  labels.forEach(label => {
      label.style.color = cccColorInput.value;
  });
}

function mudarCorBotãoQuarta() {
  const dddColorInput = document.getElementById('ddd-color');
  const buttons = document.querySelectorAll('.quarta-section .login-button');
  buttons.forEach(button => {
      button.style.backgroundColor = dddColorInput.value;
  });
}




//-------------------------------------------------------------------------------------------------///////////////////////////////


// ------------------------------------------------------



    document.querySelector('.card-number-input').oninput = () =>{
      document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
  }
  
  document.querySelector('.card-holder-input').oninput = () =>{
      document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
  }
  
  document.querySelector('.month-input').oninput = () =>{
      document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
  }
  
  document.querySelector('.year-input').oninput = () =>{
      document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
  }
  
  document.querySelector('.cvv-input').onmouseenter = () =>{
      document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
      document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
  }
  
  document.querySelector('.cvv-input').onmouseleave = () =>{
      document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
      document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
  }
  
  document.querySelector('.cvv-input').oninput = () =>{
      document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
  }





  //--------------- FUNÇÕES QUINTA SECTION ------------------------------------------------

  function toggleSelecionarContainer() {
    var container = document.getElementById("Selecionar-Serviços-Container");
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

function adicionarInputText() {
    var container = document.getElementById("Selecionar-Serviços-Container");

    var serviçoInput = document.createElement("input");
    serviçoInput.type = "text";
    serviçoInput.className = "serviço-input";
    serviçoInput.placeholder = "Serviço";
    serviçoInput.oninput = function() {
        validarEntradaServico(this);
    };

    var preçoInput = document.createElement("input");
    preçoInput.type = "text";
    preçoInput.className = "preço-input";
    preçoInput.placeholder = "Preço";
    preçoInput.oninput = function() {
        validarEntradaPreco(this);
    };

    var lineBreak = document.createElement("br");

    container.appendChild(serviçoInput);
    container.appendChild(document.createTextNode(' ')); // Adicionando um espaço
    container.appendChild(preçoInput);
    container.appendChild(lineBreak);
}

function validarEntradaServico(input) {
    input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\u0020]/g, '').toUpperCase();
}

function validarEntradaPreco(input) {
    var num = input.value.replace(/\D/g, '');
    if (num.length > 0) {
        num = num.replace(/^0+/, '');
        num = num.padStart(3, '0');
        num = "R$" + num.slice(0, -2) + "," + num.slice(-2);
    }
    input.value = num;
}

function salvarServiços() {
    var container = document.getElementById("Selecionar-Serviços-Container");
    var serviçoInputs = container.querySelectorAll(".serviço-input");
    var preçoInputs = container.querySelectorAll(".preço-input");
    var hasContent = false;

    for (var i = 0; i < serviçoInputs.length; i++) {
        if (serviçoInputs[i].value.trim() !== "" && preçoInputs[i].value.trim() !== "") {
            hasContent = true;
            break;
        }
    }

    if (hasContent) {
        container.style.display = "none";
        var selecionarButton = document.getElementById("selecionar");
        selecionarButton.textContent = "Selecionado";
    } else {
        alert("Preencha pelo menos um serviço e preço antes de salvar.");
    }
}






  function validarInput(input) {
    // Converter para minúsculas e remover caracteres especiais
    var valor = input.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Limitar a 16 caracteres
    input.value = valor.substring(0, 20);
  }




  //-------------- FUNÇÕES DA SEXTA SECTION -----------------------------------------------------

  document.querySelectorAll('.flip-card').forEach(function(card) {
    card.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
  });

  function salvarFormulario(button) {
    // Obter os inputs dentro do flip-card-back atual
    const inputs = button.parentElement.querySelectorAll('.flip-card-back input');
    
    // Verificar se todos os inputs estão preenchidos
    let todosPreenchidos = true;
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        todosPreenchidos = false;
      }
    });
    
    // Se todos os inputs estiverem preenchidos, mudar o texto do botão para 'Salvo'
    if (todosPreenchidos) {
      button.textContent = 'Salvo';
    }
  }



  function validarNome(input) {
    // Verifica se o nome contém apenas letras e espaços
    return /^[a-zA-Z\s]+$/.test(input);
}

function validarLogin(input) {
    // Verifica se o login não contém espaços
    return !/\s/.test(input);
}

function validarSenha(input) {
    // Verifica se a senha contém apenas números e tem no máximo 10 caracteres
    return /^\d{1,10}$/.test(input);
}

function salvarFormulario(botao) {
    var flipCardBack = botao.parentElement;
    var inputs = flipCardBack.querySelectorAll('input');
    var nome = inputs[0].value;
    var login = inputs[1].value;
    var senha = inputs[2].value;

    // Validação dos campos
    if (!validarNome(nome)) {
        alert("Por favor, insira um nome válido contendo apenas letras e espaços.");
        return;
    }

    if (!validarLogin(login)) {
        alert("Por favor, insira um login válido sem espaços.");
        return;
    }

    if (!validarSenha(senha)) {
        alert("Por favor, insira uma senha válida contendo apenas números e com no máximo 10 caracteres.");
        return;
    }
    
}
