import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar, iniciarSesion} from './UsuarioController.js';

const router = Router();

// Mostrar usuarios
router.get("/mostrar", mostrar);
// Crear usuarios
router.post("/crear", crear);
// Buscar usuario por id
router.get("/:id", buscarPorId);
// Actualizar usuario
router.put("/actualizar/:id", actualizar);
// Inhabilitar usuario por id
router.put("/inhabilitar/:id", inhabilitar);
// Iniciar sesion de usuario
router.post("/iniciarsesion", iniciarSesion);


export default router;