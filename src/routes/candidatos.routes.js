import { Router } from "express";

const candidatosRoutes = Router()

let candidatos = [
    {
      id: Math.random() * 100000,
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
    const { nome, cor } = req.body
   

  const novaEmocao = {
    id: candidatos.length + 1,
     nome: nome,
     cor:cor,
  }

    candidatos.push(novaEmocao)

      return res.status(201).send(candidatos)
});

candidatosRoutes.get("/:id", (req, res) => {
  const {id} = req.params;

  //console.log(id);

  const emocao = candidatos.find((emotion) => emotion.id == id )

  if (!emocao) {
    return res.status(404).send({
      message: "Emoção não encontrada!"
    })
  }
return res.status(200).send({
      message: "Emoção encontrada!"
});


});



export default candidatosRoutes;