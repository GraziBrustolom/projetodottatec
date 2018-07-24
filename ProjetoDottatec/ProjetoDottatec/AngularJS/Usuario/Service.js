
usuarioApp.service('usuarioService', function ($http) {

    //Método para leitura de todos os dados da tabela usuários
    this.GetUsuarios = function () {
        return $http.get("/Usuario/GetUsuarios");
    }

    //Método para inserir usuário
    this.InsertUsuario = function (usuario) {

        var request = $http({
            method: 'post',
            url: '/Usuario/InsertUsuario',
            data: usuario
        });

        return request;
    }

    //Método para atualizar usuário por cpf
    this.UpdateUsuario = function (usuario) {

        var requestAtualizado = $http({
            method: 'post',
            url: '/Usuario/UpdateUsuario',
            data: usuario
        });
        return requestAtualizado;
    }

    //Método para excluir usuário por cpf
    this.DeleteUsuario = function (usuario) {
        var requestDelete = $http({
            method: 'post',
            url: '/Usuario/DeleteUsuario',
            data: usuario
        });
        return requestDelete;
       
    }

})