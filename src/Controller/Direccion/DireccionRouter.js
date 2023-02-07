import { Router } from "express";
import {mostrar,crear,buscarPorId, actualizar, inhabilitar} from './DireccionController.js';

const router = Router();

// Mostrar Direcciones
router.get("/mostrar", mostrar);
// Crear Direccion
router.post("/crear", crear);
// Buscar por id
router.get("/:id", buscarPorId);
// Actualizar por id
router.put("/actualizar/:id", actualizar);
// Inhabilitar por id 
router.put("/inhabilitar/:id", inhabilitar);

export default router;