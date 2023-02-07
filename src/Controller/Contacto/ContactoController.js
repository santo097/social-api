import { Contacto } from "../../Model/ContactoModel.js";

// Mostrar Contactos

export const mostrar = async(req,res) =>{
    try{
        const contacto = await Contacto.findAll({
            atributes:["id", "telefono", "correo", "sitioweb", "activo"]
        });
        if(!contacto.length){
            return res.status(404).json('No existen datos de contacto');
        }
        else{
            return res.status(200).json(contacto);
        }
    } catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Crear Contacto

export const crear = async (req,res) =>{
    try{
        const contacto = await Contacto.findOrCreate({
            where:{
                telefono:req.body.telefono,
                correo:req.body.correo,
                sitioweb:req.body.sitioweb
            }
        });
        if(!contacto.length){
            return res.status(200).json({
                message:'¡Contacto agregado!'
            });
        }
        else{
            return res.status(302).json({
                message: 'El contacto ya fue agregado'
            });
        }
    } catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Buscar por id 

export const buscarPorId = async(req,res) =>{
    try{
        const contacto = await Contacto.findByPk(req.params.id);
        if(!contacto){
            return res.status(404).json({
                message:'No existe el contacto'
            });
        }else{
            return res.status(200).json({
                informacion:ciudad
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Actualizar contacto

export const actualizar = async(req,res) =>{
    try{
        const contactoBuscar = await Contacto.findByPk(req.params.id);
        if(!contactoBuscar){
            return res.status(404).json({
                message:'No existe el contacto'
            });
        }
        else{
            const contactoActualizar = await Contacto.update(
                {
                    telefono:req.body.telefono,
                    correo:req.body.correo,
                    sitioweb:req.body.sitioweb,
                },
                {where:{id:req.params.id}});
                return res.status(200).json({message:"Contacto actualizado"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}


// 

export const inhabilitar = async(req,res) =>{
    try{
        const contactoBuscar = await Contacto.findByPk(req.params.id);
        if(!contactoBuscar){
            return res.status(404).json({
                message:'No existe el contacto'
            });
        }
        else{
            const contactoActualizar = await Contacto.update(
                {activo:0},
                {where:{id:req.params.id}});
                return res.status(200).json({message:"Contacto inhabilitada"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}