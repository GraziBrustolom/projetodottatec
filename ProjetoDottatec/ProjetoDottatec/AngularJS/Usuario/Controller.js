usuarioApp.controller('usuarioCtrl', function ($scope, usuarioService) {

    //Recupera usuários ao iniciar a aplicação
    GetUsuarios();


    //Método para consultar todos os usuários (GET)
    function GetUsuarios() {
        var listUsuarios = usuarioService.GetUsuarios();

        listUsuarios.then(function (d) {
            $scope.Usuarios = d.data;
        }, function () {
            alert("Ocorreu um erro ao listar os usuários.");
        });

    }


    //Método para adicionar usuário (INSERT)
    $scope.InsertUsuario = function () {

        var usuario = {
            cpf: $scope.cpf,
            nome: $scope.nome,
            email: $scope.email,
            senha: $scope.senha
        };

        var adicionarInfos = usuarioService.InsertUsuario(usuario);

        adicionarInfos.then(function (d) {
            if (d.data.success === true) {
                GetUsuarios();
                alert("Usuário inserido com sucesso!");

                $scope.limparDados();
            } else { alert("Operação não foi concluída com sucesso."); }
        },
            function () {
                alert("Ocorreu um erro ao tentar adicionar um novo usuário!");
            });
    }


    //Método para atualizar usuário (UPDATE)
    $scope.UpdateUsuario = function () {
        var usuario = {
            cpf: $scope.AtualizadoUsuarioCPF,
            nome: $scope.AtualizadoNome,
            email: $scope.AtualizadoEmail,
            senha: $scope.AtualizadoSenha
        };
        var atualizarInfos = usuarioService.UpdateUsuario(usuario);
        atualizarInfos.then(function (d) {
            if (d.data.success === true) {
                GetUsuarios();
                alert("Usuário atualizado com sucesso.");
                $scope.limparDadosAtualizados();
            }
            else {
                alert("Operação não foi concluída com sucesso.");
            }
        },
            function () {
                alert("Ocorreu um erro ao tentar atualizar o usuário.");
            });
    }


    //Método para excluir usuário (DELETE)
    $scope.DeleteUsuario = function () {

        var usuario = {
            cpf: $scope.UsuarioCPF,
            nome: $scope.UsuarioNome
        };
        var excluirInfos = usuarioService.DeleteUsuario(usuario);
        excluirInfos.then(function (d) {

            if (d.data.success === true) {
                GetUsuarios();

                alert("Usuário excluído com sucesso.");
            }
            else {
                alert("Operação não foi concluída com sucesso.");
            }
        });
    }



    //Limpa os campos modal Excluir
    $scope.limparDados = function () {
        $scope.cpf = "";
        $scope.nome = "";
        $scope.email = "";
        $scope.senha = "";
    }

    ////Método para recuperar dados a serem atualizados para o modal
    $scope.atualizarDados = function (usuario) {

        $scope.AtualizadoUsuarioCPF = usuario.cpf;
        $scope.AtualizadoNome = usuario.nome;
        $scope.AtualizadoEmail = usuario.email;
        $scope.AtualizadoSenha = usuario.senha;
    }

   // Método para recuperar dados a serem excluídos para o modal
    $scope.excluirDados = function (usuario) {
        $scope.UsuarioCPF = usuario.cpf;
        $scope.UsuarioNome = usuario.nome;
    }

    //Limpar dados atualizados modal
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoUsuarioCPF = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoSenha = '';
    }

});