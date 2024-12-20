document.addEventListener("DOMContentLoaded", function() {
  const logoVplay = document.getElementById("logo-vplay");

  if (logoVplay) {
      logoVplay.addEventListener("dblclick", function() {
          window.open("https://vplaybarbearia.netlify.app/", "_blank");
      });
  }
});


// Selecionando o ícone do menu e o sidebar
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

// Função para fechar o sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
}

// Adicionando o evento de clique no ícone do menu
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Alternando a classe 'active' do sidebar
});

// Selecionando todos os elementos li dentro do sidebar
const sidebarItems = sidebar.querySelectorAll('a');

// Adicionando o evento de clique em cada li
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    closeSidebar(); // Fechar o sidebar quando um li for clicado
  });
});





    document.addEventListener('DOMContentLoaded', function () {
      // Selecionar todos os links dentro da div selecionar-planos
      const links = document.querySelectorAll('.selecionar-planos a');
  
      // Iterar sobre cada link
      links.forEach(function (link) {
          // Adicionar um ouvinte de evento de clique para cada link
          link.addEventListener('click', function () {
              // Remover a classe 'ativo' de todos os links
              links.forEach(function (el) {
                  el.classList.remove('ativo');
              });
  
              // Adicionar a classe 'ativo' ao link clicado
              link.classList.add('ativo');
  
              // Adicionar a classe 'selecionado' ao link clicado
              links.forEach(function (el) {
                  el.classList.remove('selecionado');
              });
              link.classList.add('selecionado');
  
              // Obter o texto do link clicado
              const tipoPlano = link.textContent.trim().toLowerCase();
  
              // Atualizar os preços dos cards de acordo com o tipo de plano selecionado
              const cards = document.querySelectorAll('.plan-card');
              cards.forEach(function (card) {
                  const titulo = card.querySelector('h3').textContent.trim().toLowerCase();
                  const precoParagrafo = card.querySelector('p');
                  switch (tipoPlano) {
                      case 'mensal':
                          switch (titulo) {
                              case 'plano básico':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 69,90/mês';
                                  break;
                              case 'plano padrão':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 97,90/mês';
                                  break;
                              case 'plano premium':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 135,20/mês';
                                  break;
                          }
                          break;
                      case 'semestral':
                          switch (titulo) {
                              case 'plano básico':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 419,40/semestre';
                                  break;
                              case 'plano padrão':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 587,40/semestre';
                                  break;
                              case 'plano premium':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 811,20/semestre';
                                  break;
                          }
                          break;
                      case 'anual':
                          switch (titulo) {
                              case 'plano básico':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 838,80/ano';
                                  break;
                              case 'plano padrão':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 1.174,80/ano';
                                  break;
                              case 'plano premium':
                                  precoParagrafo.innerHTML = '<strong>Preço:</strong> R$ 1.622,40/ano';
                                  break;
                          }
                          break;
                  }
              });
          });
      });
  });





  // Adicionando um event listener para quando clicar na pergunta
  document.querySelectorAll('.pergunta').forEach(function(pergunta) {
    pergunta.addEventListener('click', function() {
      // Oculta todas as respostas
      document.querySelectorAll('.resposta').forEach(function(resposta) {
        resposta.style.display = 'none';
      });

      // Seleciona a resposta correspondente à pergunta clicada
      var resposta = this.nextElementSibling;
      
      // Verifica se a resposta está visível
      if (resposta.style.display === 'none') {
        // Se estiver oculta, exibe a resposta
        resposta.style.display = 'block';
      } else {
        // Se estiver visível, oculta a resposta
        resposta.style.display = 'none';
      }
    });
  });




  document.getElementById("ideias-funcionalidades").addEventListener("click", function() {
    window.location.href = "https://forms.gle/iSSv54AACAiULEpk6"; // Substitua "URL_DA_FUNCIONALIDADE" pela URL desejada
});

document.getElementById("ideias-comunicação").addEventListener("click", function() {
    window.location.href = "https://forms.gle/iSSv54AACAiULEpk6"; // Substitua "URL_DA_COMUNICACAO" pela URL desejada
});

document.getElementById("ideais-layoult").addEventListener("click", function() {
    window.location.href = "https://forms.gle/iSSv54AACAiULEpk6"; // Substitua "URL_DO_LAYOULT" pela URL desejada
});

