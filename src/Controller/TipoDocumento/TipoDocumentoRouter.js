import { Router } from "express";
import {mostrar,crear,buscarPorId,actualizar,inhabilitar} from './TipoDocumentoController.js';
import { validarToken } from "../../Service/Autenticador.js";
const router = Router();

// Mostrar tipo de documentos
router.get("/mostrar", validarToken,mostrar);

// Crear tipo de documento
router.post("/crear", validarToken,crear);

// Buscar tipo de documento por id 
router.get("/:id", validarToken,buscarPorId);

// Actualizar tipo de documento
router.put("/actualizar/:id", validarToken,actualizar);

// Inhabilitar tipo de documento por id
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;