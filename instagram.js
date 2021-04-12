const { Usuario, Post, Comentario, sequelize, Sequelize} = require('./models');
const {Op}  = require('sequelize');

// Usuario.findAll()
// .then((resultado)=> {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findOne({
//     where: {
//         nome: 'Hendy Almeida'
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Post.findAll()
// .then((resultado)=> {
//     console.log(resultado.map(post => post.toJSON()));
// });

// Comentario.findAll()
// .then((resultado)=> {
//     console.table(resultado.map(comentario => comentario.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// }).then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });


// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// }).then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });


// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'ASC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

// Usuario.create({
//     nome: 'Isaac Dias',
//     email: 'isaac@email.com',
//     senha: 'teste123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.findAll()
// .then((resultado)=> {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.create({
//     texto: 'Testando o create',
//     usuarios_id: 10,
//     n_likes: 0
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.findAll()
// .then((resultado)=> {
//     console.table(resultado.map(post => post.toJSON()));
// });

// Usuario.update({
//     email: 'novoemail@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then(() => {
//     console.log('Usuario deletado com sucesso!');
// })

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// }).then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
//     sequelize.close();
// })

// Usuario.findByPk(1, {include: ['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include: ['comentarios']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)

// Post.findByPk(1, {
//     include: [
//         {association: "comentarios"}
//     ]
// }).then((post) => {
//     console.table(post.comentarios.map((post) => post.toJSON()));
//     sequelize.close();
// })