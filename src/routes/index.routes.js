import { Router } from "express";

import candidatosRoutes from "./candidatos.routes.js";

const routes = Router();

routes.get("/", (req, rest) => {
    return rest.status(200).send({message: "Olá Chefe, Bom dia!!"})
})

routes.use("/canditados", candidatosRoutes);

export default routes;