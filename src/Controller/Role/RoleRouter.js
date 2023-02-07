import { Router } from "express";
import { mostrar, crear,buscarPorId,actualizar,inhabilitar } from "./RoleController.js";

const router = Router();

// Mostrar roles
router.get("/mostrar", mostrar);
// Crear Rol
router.post("/crear", crear);
// Buscar rol por id
router.get("/:id", buscarPorId);
// Actualizar rol
router.put("/actualizar/:id", actualizar);
// Inhabilitar rol
router.put("/inhabilitar/:id", inhabilitar);

export default router;