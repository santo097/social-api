import { Router } from "express";
import {mostrar,crear,buscarPorId,actualizar,inhabilitar} from './TipoDocumentoController.js';
const router = Router();

// Mostrar tipo de documentos
router.get("/mostrar", mostrar);

// Crear tipo de documento
router.post("/crear", crear);

// Buscar tipo de documento por id 
router.get("/:id", buscarPorId);

// Actualizar tipo de documento
router.put("/actualizar/:id", actualizar);

// Inhabilitar tipo de documento por id
router.put("/inhabilitar/:id", inhabilitar);

export default router;