import { Router } from "express";
import {mostrar,crear,buscarPorId, actualizar, inhabilitar} from './DireccionController.js';
import { validarToken } from "../../Service/Autenticador.js";

const router = Router();

// Mostrar Direcciones
router.get("/mostrar",validarToken ,mostrar);
// Crear Direccion
router.post("/crear",crear);
// Buscar por id
router.get("/:id", validarToken,buscarPorId);
// Actualizar por id
router.put("/actualizar/:id", validarToken,actualizar);
// Inhabilitar por id 
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;