import { Router } from "express";
import { mostrar, crear,buscarPorId,actualizar,inhabilitar } from "./RoleController.js";
import { validarToken } from "../../Service/Autenticador.js";

const router = Router();

// Mostrar roles
router.get("/mostrar", validarToken,mostrar);
// Crear Rol
router.post("/crear", validarToken,crear);
// Buscar rol por id
router.get("/:id", validarToken,buscarPorId);
// Actualizar rol
router.put("/actualizar/:id", validarToken,actualizar);
// Inhabilitar rol
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;