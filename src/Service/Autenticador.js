import Jwt from "jsonwebtoken";
import Configuracion from "../Utilities/Configuracion.js";

export const validarToken = (req,res,next) =>{
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(403).json({message: 'No hay token'});
    }

    Jwt.verify(token, Configuracion.Keys.secretKey,(error, decoded) =>{
        if(error){
            return res.status(403).json({message:'¡No esta autorizado!'});
        }

        req.userId = decoded.id;

        next();
    });
}

