let idParaDeletar = null; // Variável global para guardar o ID

function buscarParaDeletar() {
    const rgBusca = document.getElementById('rgBusca').value;
    const deleteConfirmDiv = document.getElementById('delete-confirm');

    fetch(`/api/registros?rg=${rgBusca}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const registro = data[0];
                
                // Salva o ID
                idParaDeletar = registro.id;

                // Mostra os dados de confirmação
                document.getElementById('nome-deletar').textContent = `${registro.nome} ${registro.sobrenome}`;
                document.getElementById('email-deletar').textContent = registro.email;
                document.getElementById('rg-deletar').textContent = registro.rg;
                
                deleteConfirmDiv.style.display = 'block';
            } else {
                alert('Registro não encontrado com este RG.');
                deleteConfirmDiv.style.display = 'none';
                idParaDeletar = null;
            }
        })
        .catch(error => console.error('Erro ao buscar:', error));
}

function deletarDados() {
    if (idParaDeletar) {
        fetch(`/api/registros/${idParaDeletar}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Registro deletado com sucesso!');
                // Limpa e esconde
                document.getElementById('delete-confirm').style.display = 'none';
                document.getElementById('rgBusca').value = '';
                idParaDeletar = null;
            } else {
                alert('Falha ao deletar o registro.');
            }
        })
        .catch(error => console.error('Erro ao deletar:', error));
    } else {
        alert('Nenhum registro selecionado para deleção.');
    }
}