import { Router } from "express";
import { mostrar, crear, buscarPorId, actualizar, inhabilitar, iniciarSesion} from './UsuarioController.js';
import { validarToken } from "../../Service/Autenticador.js";

const router = Router();

// Mostrar usuarios
router.get("/mostrar",validarToken,mostrar);
// Crear usuarios
router.post("/crear",crear);
// Buscar usuario por id
router.get("/:id",validarToken,buscarPorId);
// Actualizar usuario
router.put("/actualizar/:id",validarToken,actualizar);
// Inhabilitar usuario por id
router.put("/inhabilitar/:id",validarToken,inhabilitar);
// Iniciar sesion de usuario
router.post("/iniciarsesion", iniciarSesion);


export default router;