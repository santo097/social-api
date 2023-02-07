import { TipoDocumento } from '../../Model/TipoDocumentoModel.js';

// Mostrar tipo de documentos

export const mostrar = async(req,res) =>{
    try{
        const tipoDocumento = await TipoDocumento.findAll({
            attributes:["id", "ciudad", "activo"]
        });
        if(!tipoDocumento.length){
            return res.status(404).json('No existen datos del tipo de documento');
        }
        else{
            return res.status(200).json(tipoDocumento);
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Crear tipo de documento

export const crear = async (req,res) =>{
    try{
        const tipoDocumento = await TipoDocumento.findOrCreate({
            where:{tipoDocumento: req.body.tipoDocumento},
            defaults:{activo:1}
        });
        if(!tipoDocumento.length){
            return res.status(200).json({
                message:"¡Tipo de documento agregado!"
            });
        }
        else{
            return res.status(302).json({
                message:'El tipo de documento ya fue agregada'
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
        const tipoDocumento = await TipoDocumento.findByPk(req.params.id);
        if(!tipoDocumento){
            return res.status(404).json({
                message:'No existe el tipo de documento'
            });
        }
        else{
            return res.status(200).json({
                informacion:tipoDocumento
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Actualizar tipo de documento

export const actualizar = async(req,res) =>{
    try{
        const tipoDocumento = await TipoDocumento.findByPk(req.params.id);
        if(!tipoDocumento){
            return res.status(404).json({
                message:'No existe el tipo de documento'
            });
        }
        else{
            const tipoDocumentoActualizar = await TipoDocumento.update(
                {tipoDocumento:req.body.tipoDocumento},
                {where:{id:req.params.id}});
            
            return res.status(200).json({message:"¡Tipo de documento actualizado!"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Inhabilitar tipo de documento

export const inhabilitar = async(req,res) =>{
    try{
        const tipoDocumento = await TipoDocumento.findByPk(req.params.id);
        if(!tipoDocumento){
            return res.status(404).json({
                message:'No existe el tipo de documento'
            });
        }
        else{
            const tipoDocumentoActualizar = await TipoDocumento.update(
                {activo:0},
                {where:{id:req.params.id}});
            
            return res.status(200).json({message:"¡Tipo de documento inhabilitado!"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}