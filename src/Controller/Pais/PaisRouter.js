import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar } from "./PaisController.js";
import { validarToken } from "../../Service/Autenticador.js";
const router = Router();

// Mostrar paises
router.get("/mostrar", validarToken,mostrar);

// Crear pais
router.post("/crear", validarToken,crear);

// Buscar pais por id
router.get("/:id", validarToken,buscarPorId);

// Actualizar pais
router.put("/actualizar/:id", validarToken,actualizar);

// Inhabilitar pais por id
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;