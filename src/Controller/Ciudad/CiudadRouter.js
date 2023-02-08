import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar} from "./CiudadController.js";
import { validarToken } from "../../Service/Autenticador.js";
const router = Router();

// Mostrar ciudades
router.get("/mostrar", validarToken ,mostrar);
// Crear ciudad
router.post("/crear",validarToken ,crear);
// Buscar ciudad por id
router.get("/:id",validarToken ,buscarPorId);
// Actualizar ciudad
router.put("/actualizar/:id",validarToken ,actualizar);
// Inhabilitar ciudad por id
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;