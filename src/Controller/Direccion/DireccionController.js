import { Direccion} from "../../Model/DireccionModel.js";

// Mostrar direccion

export const mostrar = async(req,res) =>{
    try{
        const direccion = await Direccion.findAll({
            attributes:["id", "direccion", "activo"]
        });
        if(!direccion.length){
            return res.status(404).json('No existen datos de direccion');
        }
        else{
            return res.status(200).json(direccion);
        }
    } catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Crear direccion

export const crear = async (req, res) =>{
    try{
        const direccion = await Direccion.findOrCreate({
            where:{
                domicilio: req.body.domicilio,
                codigoPostal:req.body.codigoPostal,
            },
            defaults:{
                activo:1,
                paisID:1,
                ciudadID:1
            }
        });
        if(!direccion.length){
            return res.status(200).json({
                message:'¡Direccion Agregada!'
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
        const direccion = await Direccion.findByPk(req.params.id);
        if(!direccion){
            return res.status(404).json({
                message:'No existe dicha direccion'
            });
        }
        else{
            return res.status(200).json({
                informacion:pais
            });
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Actualizar direccion

export const actualizar = async(req,res) =>{
    try{
        const direccionBuscar = await Direccion.findByPk(req.params.id);
        if(!direccionBuscar){
            return res.status(404).json({
                message:'No existe el pais'
            });
        }
        else{
            const direccionActualizar = await Direccion.update(
                {direccion:req.body.direccion},
                {where:{id:req.params.id}});
                return res.status(200).json({message:"Direccion Actualizada"});
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Inhabilitar direccion

export const inhabilitar = async(req,res) =>{
    try{
        const direccionBuscar = await Direccion.findByPk(req.params.id);
        if(!direccionBuscar){
            return res.status(404).json({
                message:'No existe la direccion'
            });
        }
        else{
            const direccionActualizar = await Direccion.update(
                {activo:0},
                {where:{id:req.params.id}});
                return res.status(200).json({message:"Direccion inhabilitada"});
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}