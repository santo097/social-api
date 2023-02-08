import {Publicacion} from "../../Model/PublicacionModel.js";

// Mostrar publicacion

export const mostrar = async(req,res) =>{
    try{
        const publicacion = await Publicacion.findAll({
            attributes:["id", "titulo", "descripcion", "activo"]
        });
        if(!publicacion.length){
            return res.status(404).json('No existen publicaciones');
        }
        else{
            return res.status(200).json(publicacion);
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Crear publicacion

export const crear = async(req,res) =>{
    try{
        const publicacion = await Publicacion.create({
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            informacionusuarioID:req.body.informacionusuarioID,
            activo:1
        });

        return res.status(200).json({
            message:'¡Publicacion agregada!'
        });
    } catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Buscar por id

export const buscarPorId = async(req,res) =>{
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(!publicacion){
            return res.status(404).json({
                message:'No hay publicaciones'
            });
        }else{
            return res.status(200).json({
                informacion:publicacion
            });
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Traer todas las publicaciones del usuario

export const publicacionUsuario = async(req,res) =>{
    try{
        const publicacion = await Publicacion.findAll({
            attributes:["id", "titulo", "descripcion", "activo"],where:{informacionusuarioID:req.body.informacionusuarioID}});
        if(!publicacion.length){
            return res.status(404).json({
                message:'No hay publicaciones'
            });
        }else{
            return res.status(200).json({
                informacion:publicacion
            });
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Actualizar publicacion

export const actualizar = async(req,res) =>{
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(!publicacion){
            return res.status(404).json({
                message:'No hay publicaciones'
            });
        }else{
            const publicacionActualizar = await Publicacion.update({
                titulo:req.body.titulo,
                descripcion:req.body.descripcion
            },
            {where:{id:req.params.id}});
            return res.status(200).json({
                message:"Publicacion actualizada"
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// inhabilitar publicacion

export const inhabilitar = async(req,res) =>{
    try{
        const publicacion = await Publicacion.findByPk(req.params.id);
        if(!publicacion){
            return res.status(404).json({
                message:'No hay publicaciones'
            });
        }else{
            const publicacionActualizar = await Publicacion.update({
                activo:0
            },
            {where:{id:req.params.id}});
            return res.status(200).json({
                message:"Publicacion inhabilitada"
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}