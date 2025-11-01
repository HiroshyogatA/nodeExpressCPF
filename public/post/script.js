function enviarDados() {
    // Coleta todos os valores dos inputs
    const dados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        email: document.getElementById('email').value,
        idade: document.getElementById('idade').value,
        telefone: document.getElementById('telefone').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        rg: document.getElementById('rg').value
    };

    // Envia os dados para a API (note o /api/ no início)
    fetch('/api/registros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) // Converte o objeto JavaScript em texto JSON
    })
    .then(response => {
        // Verifica se a resposta do servidor foi bem-sucedida (status 201 Created)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Cadastro realizado com sucesso!');
        // Limpa o formulário após o sucesso
        document.getElementById('post-form').reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
        alert(`Erro ao cadastrar. Verifique o console (F12) para mais detalhes.`);
    });
}