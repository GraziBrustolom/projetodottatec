using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProjetoDottatec.Models
{
    [Table("User", Schema = "ProjetoDB")]
    public class Usuario
    {
        public Usuario()
        {
            this.nome = "";
            this.senha = "";
            this.cpf = "";
            this.email = "";
        }

        private string nome;

        public string Nome
        {
            get { return nome; }
            set { nome = value; }
        }

        private string cpf;

        public string Cpf
        {
            get { return cpf; }
            set { cpf = value; }
        }

        private string email;

        public string Email
        {
            get { return email; }
            set { email = value; }
        }


        private string senha;

        public string Senha
        {
            get { return senha; }
            set { senha = value; }
        }



    }
}