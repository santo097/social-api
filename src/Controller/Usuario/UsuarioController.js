import { Usuario } from '../../Model/UsuarioModel.js';
import bcrypt from 'bcryptjs';
import Configuracion from '../../Utilities/Configuracion.js';
import  Jwt  from 'jsonwebtoken';
// Mostrar usuarios

export const mostrar = async (req,res) =>{
    try{
        const usuarios = await Usuario.findAll({
            attributes:["id", "usuario", "contraseña","informacionusuarioID","roleID","activo"]
        });
        if(!usuarios.length){
            return res.status(404).json('No existen datos de usuarios');
        }
        else{
            return res.status(200).json(usuarios);
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// crear usuario

export const crear = async (req,res) =>{
    try{
        const usuarioBuscar = await Usuario.findOne({where:{usuario:req.body.usuario}});
        if(usuarioBuscar === null){
            const usuario = await Usuario.create({
                usuario:req.body.usuario,
                contraseña:bcrypt.hashSync(req.body.contraseña, 8),
                informacionusuarioID:req.body.informacionusuarioID,
                roleID:req.body.roleID,
                activo:1
            });
            return res.status(200).json({
                message:'¡usuario agregado!'
            });
        }else{
            return res.status(302).json({
                message:'usuario existente'
            });
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Buscar por id 

export const buscarPorId = async(req,res) =>{
    try{
        const usuario = await Usuario.findByPk(req.params.id);
        if(!usuario){
            return res.status(404).json({
                message:'No existe el usuario'
            });
        }
        else{
            return res.status(200).json({
                informacion:usuario
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Actualizar usuario

export const actualizar = async (req, res) =>{
    try{
        const usuariobuscar = await Usuario.findByPk(req.params.id);
        if(!usuariobuscar){
            return res.status(404).json({
                message:'No existe el usuario'
            });
        }
        else{
            const usuarioActualizar = await Usuario.update(
                {  usuario:req.body.usuario,
                    contraseña:bcrypt.hashSync(req.body.contraseña, 8),
                    informacionusuarioID:req.body.informacionusuarioID,
                    roleID:req.body.roleID
                },{where:{id:req.params.id}});
            return res.status(200).json({message:'Usuario actualizado'});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Inhabilitar usuario

export const inhabilitar = async(req,res) =>{
    try{
        const usuariobuscar = await Usuario.findByPk(req.params.id);
        if(!usuariobuscar){
            return res.status(404).json({
                message:'No existe el usuario'
            });
        }
        else{
            const usuarioActualizar = await Usuario.update(
                {activo:0},
                {where:{id:req.params.id}});
            return res.status(200).json({message:'Usuario inhabilitado'});
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Iniciar sesion

export const iniciarSesion = async (req,res) =>{
    const usuario = await Usuario.findOne({where:{usuario:req.body.usuario}});
    if(!usuario){
        return res.status(404).json({message:'Usuario no existe'});
    }
    else{
        let validarContraseña = bcrypt.compareSync(
            req.body.contraseña,
            usuario.contraseña
        );
        

        if(!validarContraseña){
            return res.status(401).json({
                accessToken: null,
                message:"Contraseña incorrecta"
            });
        }

        const token = Jwt.sign({id: usuario.id}, Configuracion.Keys.secretKey, {
            expiresIn:10800 // 3 Horas
        });

        res.status(200).json({
            id: usuario.id,
            usuario:usuario.usuario,
            token:token,
            activo: usuario.activo
        });
    }
}