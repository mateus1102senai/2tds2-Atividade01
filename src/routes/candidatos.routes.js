import { Router } from "express";

const candidatosRoutes = Router()

let candidatos = [
    {
      id:Math.floor( Math.random() * 100000),
      nome: "Marcos",
      partido: "PSD",
      idade: 51,
      segundo: true,
      propostas: [
        "Aumento do sálario mínimo",
        "Redução de impostos",
        "Mais investimentos em educação"
      ]
    },
]

candidatosRoutes.get("/", (req, rest) => {
    return rest.status(200).send(candidatos)
});

candidatosRoutes.post("/", (req, res) => {
    const {id , nome, partido, idade,segundo, propostas } = req.body

    //Validação dos campos nome e partido
    if (!nome || !partido) {
        return res.status(400).send({
            message: "O nome ou o partido não foi preenchido!"
        })
    }

    // Validação de idade
if (idade < 18) {
    return res.status(400).send({
        message: "O candidato não possui idade suficiente para participar deste debate!",
    })
}


  const novoCandidato = {
    id:Math.floor( Math.random() * 100000),
    nome,
    partido,
    idade,
    segundo,
    propostas,
  };

  
    candidatos.push(candidatos);

      return res.status(201).send(candidatos)
});

candidatosRoutes.get("/:id", (req, res) => {
  const {id} = req.params;



  const candidato = candidatos.find((politico) => politico.id == id )

  if (!candidato) {
    return res.status(404).send({
      message: "Candidato não encontrado!"
    })
  }
return res.status(200).send({
      message: "Candidato encontrada",
      candidato,
});
});

candidatosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;

});



export default candidatosRoutes;