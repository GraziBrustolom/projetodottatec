using ProjetoDottatec.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjetoDottatec.Controllers
{
    public class UsuarioController : Controller
    {
       /// <summary>
       /// Método para consultar todos os usuários do banco.
       /// </summary>
       /// <returns></returns>
        public JsonResult GetUsuarios()
        {
            using (var db = new ProjetoDBEntities())
            {
                List<Usuario> listUsuarios = db.Usuarios.ToList();

                return Json(listUsuarios, JsonRequestBehavior.AllowGet);
            }
        }


        /// <summary>
        /// Método para inserir um usuário no banco.
        /// </summary>
        /// <param name="usuario">Dados do usuário a ser inserido.</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult InsertUsuario(Usuario usuario)
        {
            if(usuario != null)
            {
                using (var db = new ProjetoDBEntities())
                {
                    db.Usuarios.Add(usuario);
                    db.SaveChanges();

                    return Json(new {success = true});
                }
            }
            return Json(new { success = false });


        }


        /// <summary>
        ///  Método para atualizar dados de um usuário do banco.
        /// </summary>
        /// <param name="usuario">Dados do usuário a ser atualizado.</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UpdateUsuario(Usuario usuario)
        {
            using (var db = new ProjetoDBEntities())
            {
                var usuarioAtualizado = db.Usuarios.Find(usuario.cpf);

                if (usuarioAtualizado == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    usuarioAtualizado.nome = usuario.nome;
                    usuarioAtualizado.cpf = usuario.cpf;
                    usuarioAtualizado.senha = usuario.senha;
                    usuarioAtualizado.email = usuario.email;

                    db.SaveChanges();
                    return Json(new { success = true });

                }
            }
        }


        /// <summary>
        /// Método para excluir um usuário do banco.
        /// </summary>
        /// <param name="usuario">Dados do usuário a ser removido.</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DeleteUsuario(Usuario usuario)
        {
            using (var db = new ProjetoDBEntities())
            {
                var usuarioDelete = db.Usuarios.Find(usuario.cpf);
                if (usuarioDelete == null)
                {
                    return Json(new { success = false });
                }

                db.Usuarios.Remove(usuarioDelete);
                db.SaveChanges();

                return Json(new { success = true });



            }
        }


    }
}