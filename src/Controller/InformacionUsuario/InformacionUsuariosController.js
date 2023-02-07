import { InformacionUsuario } from "../../Model/InformacionUsuarioModel.js";

// Mostrar info de los usuarios

export const mostrar = async (req,res) =>{
    try{
        const infoUsuario = await InformacionUsuario.findAll();
        if(!infoUsuario.length){
            return res.status(404).json('no existe informacion de los usuarios');
        }
        else{
            return res.status(200).json(infoUsuario);
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// crear informacion de usuario

export const crear = async(req,res) =>{
    try{
        const infoUsuario = await InformacionUsuario.findOrCreate({
            where:{
                nombre:req.body.nombre,
                apellidos:req.body.apellidos,
                direccionID:req.body.direccionID,
                contactoID:req.body.contactoID,
                tipodocumentoID:req.body.tipodocumentoID
            },
            defaults:{
                activo:1
            }
        });
        if(!infoUsuario.length){
            return res.status(200).json({
                message:'informacion de usuario agregado!'
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
        const infoUsuario = await InformacionUsuario.findByPk(req.params.id);
        if(!infoUsuario){
            return res.status(404).json({
                message:'No existe la informacion'
            });
        }
        else{
            return res.status(200).json({
                informacion:infoUsuario
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Actualizar informacion de usuario

export const actualizar = async (req,res) =>{
    try{
        const infoUsuarioBuscar = await InformacionUsuario.findByPk(req.params.id);
        if(!infoUsuarioBuscar){
            return res.status(404).json({
                message:'No existe informacion del usuario'                
            });
        }
        else{
            const infoUsuarioActualizar = await InformacionUsuario.update(
                {
                    nombre:req.body.nombre,
                    apellidos:req.body.apellidos,
                    direccionID:req.body.direccionID,
                    contactoID:req.body.contactoID,
                    tipodocumentoID:req.body.tipodocumentoID
                },{where:{id:req.params.id}});
                return res.status(200).json({message:'Informacion de usuario actualizado'});
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
        const infoUsuarioBuscar = await InformacionUsuario.findByPk(req.params.id);
        if(!infoUsuarioBuscar){
            return res.status(404).json({
                message:'No existe informacion del usuario'                
            });
        }
        else{
            const infoUsuarioActualizar = await InformacionUsuario.update(
                {
                   activo:0
                },{where:{id:req.params.id}});
                return res.status(200).json({message:'Informacion de usuario inhabilitada'});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}