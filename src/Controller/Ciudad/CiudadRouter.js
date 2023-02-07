import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar} from "./CiudadController.js";
const router = Router();

// Mostrar ciudades
router.get("/mostrar",  mostrar);
// Crear ciudad
router.post("/crear", crear);
// Buscar ciudad por id
router.get("/:id", buscarPorId);
// Actualizar ciudad
router.put("/actualizar/:id", actualizar);
// Inhabilitar ciudad por id
router.put("/inhabilitar/:id", inhabilitar);

export default router;