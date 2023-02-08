import { Router } from "express";
import { validarToken } from "../../Service/Autenticador.js";
import { mostrar, crear,buscarPorId,publicacionUsuario,actualizar,inhabilitar } from "./PublicacionController.js";

const router = Router();

// Mostrar publicacion
router.get("/mostrar", validarToken,mostrar);
// Crear publicacion
router.post("/crear",validarToken,crear);
// Buscar publicacion por id
router.get("/:id",validarToken,buscarPorId);
// Publicaciones por el usuario
router.get('/usuario/:id',validarToken,publicacionUsuario);
// Actualizar publicacion
router.put("/actualizar/:id",validarToken,actualizar);
// Inhabilitar publicacion por id
router.put("/inhabilitar/:id", validarToken,inhabilitar);

export default router;