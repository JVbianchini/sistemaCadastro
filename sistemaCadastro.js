// Lista para armazenar os usuários cadastrados
let usuarios = [];

// Função para incluir um novo usuário
function incluirUsuario(cpf, nome, dataNascimento, email) {
    const usuario = {
        cpf: cpf,
        nome: nome,
        dataNascimento: dataNascimento,
        email: email
    };
    usuarios.push(usuario);
    console.log("Usuário incluído com sucesso!");
}

// Função para alterar dados de um usuário
function alterarUsuario(cpf, novoNome, novaDataNascimento, novoEmail) {
    const usuario = usuarios.find(u => u.cpf === cpf);
    if (usuario) {
        usuario.nome = novoNome;
        usuario.dataNascimento = novaDataNascimento;
        usuario.email = novoEmail;
        console.log("Usuário alterado com sucesso!");
    } else {
        console.log("Usuário não encontrado!");
    }
}

// Função para excluir um usuário
function excluirUsuario(cpf) {
    const index = usuarios.findIndex(u => u.cpf === cpf);
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log("Usuário excluído com sucesso!");
    } else {
        console.log("Usuário não encontrado!");
    }
}

// Função para pesquisar um usuário pelo nome
function pesquisarUsuarioPorNome(nome) {
    const encontrados = usuarios.filter(u => u.nome.toLowerCase().includes(nome.toLowerCase()));
    if (encontrados.length > 0) {
        console.log("Usuários encontrados:");
        encontrados.forEach(u => {
            console.log(`Nome: ${u.nome}, CPF: ${u.cpf}, Data de Nascimento: ${u.dataNascimento}, E-mail: ${u.email}`);
        });
    } else {
        console.log("Nenhum usuário encontrado com esse nome.");
    }
}

// Função para listar todos os usuários cadastrados
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("Lista de usuários cadastrados:");
        usuarios.forEach(u => {
            console.log(`Nome: ${u.nome}, CPF: ${u.cpf}, Data de Nascimento: ${u.dataNascimento}, E-mail: ${u.email}`);
        });
    }
}

// Exemplos de uso das funções

incluirUsuario('12345678900', 'João Silva', '2000-05-15', 'joao@exemplo.com');
incluirUsuario('98765432100', 'Maria Oliveira', '1995-08-25', 'maria@exemplo.com');
listarUsuarios();
pesquisarUsuarioPorNome('João');
alterarUsuario('12345678900', 'João Silva', '2000-05-15', 'joao@novomail.com');
listarUsuarios();
excluirUsuario('98765432100');
listarUsuarios();
