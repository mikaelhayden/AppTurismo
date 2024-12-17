const Pontos = require('../models/pontosModel.js')

exports.getPontos = async(req, res) => {
    try {
        const Pontos = await Pontos.PontosModel.find();
        res.json(Pontos)
        //res.send(Pontos);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getonePontos = async (req, res) => {   
  try {;
    res.status(201).json(await Pontos.PontosModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createPontos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updatePontos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deletePontos = async (req, res) => {   
    try {;
      res.status(201).json(await Pontos.PontosModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  exports.getonePontosID = async (req, res) => {         
      try {

        const cpf = parseInt(req.params.id); // CPF a ser pesquisado
        const Pontos = await Pontos.PontosModel.findOne({ cpf: cpf }); // Procura Pontos por CPF        

        if (!Pontos) {
          return res.status(404).json({ message: "Pontos não encontrado" });
    }

    res.status(200).json(Pontos);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  };