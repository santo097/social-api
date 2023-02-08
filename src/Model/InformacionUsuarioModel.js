import { sequelize} from "../Utilities/Database.js";
import { DataTypes } from "sequelize";
import { Direccion } from './DireccionModel.js';
import { Contacto } from './ContactoModel.js';
import {TipoDocumento} from './TipoDocumentoModel.js';
import { Publicacion } from "./PublicacionModel.js";

export const InformacionUsuario = sequelize.define("informacionusuario",{
    nombre:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    documentoIdentidad:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    apellidos:{
        type: DataTypes.STRING,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN
    }
});

// Relacion usuario y direccion

InformacionUsuario.hasMany(Direccion,{
    foreignKey:'informacionusuarioID',
    targetId:'id'
});

Direccion.belongsTo(InformacionUsuario,{
    foreignKey:'informacionusuarioID',
    sourceKey:'id'
});

// Relacion usuario y direccion

InformacionUsuario.hasMany(Contacto,{
    foreignKey:'informacionusuarioID',
    targetId:'id'
});

Contacto.belongsTo(InformacionUsuario,{
    foreignKey:'informacionusuarioID',
    sourceKey:'id'
});

// Relacion informacion usuario

TipoDocumento.hasOne(InformacionUsuario,{
    foreignKey:'tipodocumentoID',
    targetId:'id'
});

InformacionUsuario.belongsTo(TipoDocumento,{
    foreignKey:'tipodocumentoID',
    sourceKey:'id'
});

// Relacion de usuario - publicacion 

InformacionUsuario.hasMany(Publicacion,{
    foreignKey:'informacionusuarioID',
    targetId:'id'
});

Publicacion.belongsTo(InformacionUsuario,{
    foreignKey:'informacionusuarioID',
    sourceKey:'id'
});