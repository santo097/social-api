import { Router } from "express";
import { mostrar,crear, buscarPorId,actualizar,inhabilitar } from "./ContactoController.js";
import { validarToken } from "../../Service/Autenticador.js";
const router = Router();

// Mostrar contactos
router.get("/mostrar",validarToken , mostrar);
// Crear contacto
router.post("/crear",crear);
// Buscar contacto por id
router.get("/:id", validarToken ,buscarPorId);
// Actualizar contacto
router.put("/actualizar/:id", validarToken, actualizar);
// Inhabilitar contacto por id
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;