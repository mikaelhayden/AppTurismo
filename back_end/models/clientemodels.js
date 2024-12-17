const mongoose = require('mongoose');

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://clashoncv7:MtBA9oIugSfQyTEm@cluster0.pzyuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

var Schema = mongoose.Schema;

const cliente = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const ClienteModel = mongoose.model('clientes', cliente);


module.exports = {ClienteModel}