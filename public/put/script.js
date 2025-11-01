// Função para buscar dados pelo RG
function buscarDados() {
    const rgBusca = document.getElementById('rgBusca').value;
    const updateForm = document.getElementById('update-form');

    fetch(`/api/registros?rg=${rgBusca}`) // Busca por RG
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const registro = data[0]; // Pega o primeiro resultado
                
                // Preenche o formulário de atualização
                document.getElementById('id').value = registro.id;
                document.getElementById('nome').value = registro.nome;
                document.getElementById('sobrenome').value = registro.sobrenome;
                document.getElementById('email').value = registro.email;
                document.getElementById('idade').value = registro.idade;
                document.getElementById('telefone').value = registro.telefone;
                document.getElementById('rua').value = registro.rua;
                document.getElementById('bairro').value = registro.bairro;
                document.getElementById('cidade').value = registro.cidade;
                document.getElementById('estado').value = registro.estado;
                document.getElementById('rg').value = registro.rg;

                // Exibe o formulário de atualização
                updateForm.style.display = 'block';
            } else {
                alert('Registro não encontrado com este RG.');
                updateForm.style.display = 'none';
            }
        })
        .catch(error => console.error('Erro ao buscar:', error));
}

// Função para enviar a atualização (PUT)
function atualizarDados() {
    const id = document.getElementById('id').value;
    
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
        rg: document.getElementById('rg').value // Mantém o RG
    };

    fetch(`/api/registros/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        alert('Registro atualizado com sucesso!');
        // Limpa e esconde o formulário
        document.getElementById('update-form').reset();
        document.getElementById('update-form').style.display = 'none';
        document.getElementById('rgBusca').value = '';
    })
    .catch(error => console.error('Erro ao atualizar:', error));
}