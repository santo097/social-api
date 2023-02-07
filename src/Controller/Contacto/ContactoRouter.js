import { Router } from "express";
import { mostrar,crear, buscarPorId,actualizar,inhabilitar } from "./ContactoController.js";

const router = Router();

// Mostrar contactos
router.get("/mostrar",  mostrar);
// Crear contacto
router.post("/crear", crear);
// Buscar contacto por id
router.get("/:id", buscarPorId);
// Actualizar contacto
router.put("/actualizar/:id", actualizar);
// Inhabilitar contacto por id
router.put("/inhabilitar/:id", inhabilitar);

export default router;