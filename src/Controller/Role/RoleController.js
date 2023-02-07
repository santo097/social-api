import { Role } from "../../Model/RoleModel.js";

// Mostrar roles

export const mostrar = async (req,res) =>{
    try{
        const role = await Role.findAll({
            attributes:["id", "ciudad", "activo"]
        });
        if(!role.length){
            return res.status(404).json('No existen datos de roles');
        }
        else{
            return res.status(200).json(role);
        }
    }catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}

// Crear roles

export const crear = async(req,res) =>{
    try{
        const role = await Role.findOrCreate({
            where:{role:req.body.role},
            defaults:{activo:1}
        });
        if(!role.length){
            return res.status(200).json({
                message:'¡Role agregada!'
            });
        }
        else{
            return res.status(302).json({
                message:'El role ya fue agregada'
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
        const role = await Role.findByPk(req.params.id);
        if(!role){
            return res.status(404).json({
                message:'No existe el role'
            });
        }
        else{
            return res.status(200).json({
                informacion:role
            });
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

// Actualiza role

export const actualizar = async(req,res) =>{
    try{
        const role = await Role.findByPk(req.params.id);
        if(!role){
            return res.status(404).json({
                message:'No existe el rol'
            });
        }else{
            const roleActualizar = await Role.update(
                {role:req.body.role},
                {where:{id:req.params.id}});
            return res.status(200).json({message:"Rol actualizado"});
        }
    }catch(error){
        return res.status(500).json({
            message: error.message
        });  
    }
}

// Inhabilitar role

export const inhabilitar = async(req,res) =>{
    try{
        const roleBuscar = await Role.findByPk(req.params.id);
        if(!roleBuscar){
            return res.status(404).json({
                message:'No existe el rol'
            });
        }
        else{
            const roleActualizar = await Role.update(
                {activo:0},
                {where:{id:req.params.id}});
            return res.status(200).json({message:"Rol inhabilitar"})
        }
    }
    catch(error){
        return res.status(500).json({
            message:error.message
        });
    }
}