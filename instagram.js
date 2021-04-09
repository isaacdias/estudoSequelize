const { Usuario, Post, Comentario, sequelize} = require('./models');


// Usuario.findAll()
// .then((resultado)=> {
//     console.log(resultado.map(user => user.toJSON()));
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

Comentario.findAll()
.then((resultado)=> {
    console.table(resultado.map(comentario => comentario.toJSON()));
});