import { Usuario } from '../../Model/UsuarioModel.js';
import bcrypt from 'bcryptjs';

// Mostrar usuarios

export const mostrar = async (req,res) =>{
    try{
        const usuarios = await Usuario.findAll();
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
        const usuario = await Usuario.findOrCreate({
            where:{
                usuario:req.body.usuario,
                contraseña:bcrypt.hashSync(req.body.contraseña, 8),
                informacionusuarioID:req.body.informacionusuarioID,
                role:req.body.roleID
            },
            defaults:{
                activo:1
            }
        });
        if(!usuario.length){
            return res.status(200).json({
                message:'¡usuario agregado!'
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
                {   usuario:req.body.usuario,
                    contraseña:bcrypt.hashSync(req.body.contraseña, 8),
                    informacionusuarioID:req.body.informacionusuarioID,
                    role:req.body.roleID
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
        
    }
}