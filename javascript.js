// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Preencher a seção de notícias com dados fictícios
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        const newsItems = [
            { title: 'Novo Avión da Falcon Flight', content: 'A Falcon Flight Services adquiriu um novo avião para expandir sua frota. Este avião moderno promete maior conforto e eficiência.' },
            { title: 'Piloto do Mês', content: 'Parabéns ao piloto Ana Santos por suas excelentes performances no último mês. Ana demonstrou habilidades excepcionais e dedicação.' },
            { title: 'Melhoria na Segurança dos Voos', content: 'Implementamos novas medidas de segurança para garantir voos ainda mais seguros. As novas tecnologias vão aumentar a segurança dos passageiros e da equipe.' },
            { title: 'Expansão Internacional', content: 'Estamos expandindo nossas operações para novos destinos internacionais. Em breve, nossos passageiros terão acesso a mais rotas internacionais.' }
        ];

        newsItems.forEach(item => {
            const newsItemElement = document.createElement('div');
            newsItemElement.className = 'news-item';
            newsItemElement.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
            newsContainer.appendChild(newsItemElement);
        });
    }

    // Validação de Formulário de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('Todos os campos devem ser preenchidos.');
                event.preventDefault();
            }
        });
    }
});

