document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/registros')
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById('tabela-corpo');
            tabela.innerHTML = ''; // Limpa a tabela antes de preencher

            data.forEach((item) => {
                const endereco = `${item.rua}, ${item.bairro}, ${item.cidade} - ${item.estado}`;
                const nomeCompleto = `${item.nome} ${item.sobrenome}`;
                
                const linha = `<tr>
                    <td>${item.id}</td>
                    <td>${nomeCompleto}</td>
                    <td>${item.email}</td>
                    <td>${item.idade}</td>
                    <td>${item.telefone}</td>
                    <td>${endereco}</td>
                    <td>${item.rg}</td>
                </tr>`;
                tabela.innerHTML += linha;
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});