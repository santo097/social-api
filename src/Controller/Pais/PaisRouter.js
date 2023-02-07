import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar } from "./PaisController.js";

const router = Router();

// Mostrar paises
router.get("mostrar", mostrar);

// Crear pais
router.post("/crear", crear);

// Buscar pais por id
router.get("/:id", buscarPorId);

// Actualizar pais
router.put("/actualizar/:id", actualizar);

// Inhabilitar pais por id
router.put("/inhabilitar/:id", inhabilitar);

export default router;