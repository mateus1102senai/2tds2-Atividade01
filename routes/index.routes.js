import { Router } from "express";

const routes = Router();

routes.get("/", (req, rest) => {
    return rest.status(200).send({message: "Olá Chefe, Bom dia!!"})
})

export default routes;