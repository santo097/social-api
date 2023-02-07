import { sequelize} from "../Utilities/Database.js";
import { DataTypes } from "sequelize";
import { Direccion } from './DireccionModel.js';
import { Contacto } from './ContactoModel.js';
import {TipoDocumento} from './TipoDocumentoModel.js';

export const InformacionUsuario = sequelize.define("informacionusuario",{
    nombre:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    apellidos:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    activo:{
        type:DataTypes.BOOLEAN
    }
});


// Relacion usuario y direccion

Direccion.hasMany(InformacionUsuario, {
    foreignKey:'direccionID',
    targetId:'id'
});

InformacionUsuario.belongsTo(Direccion,{
    foreignKey:'direccionID',
    sourceKey:'id'
});


// Relacion usuario y direccion

Contacto.hasMany(InformacionUsuario,{
    foreignKey:'contactoID',
    targetId:'id'
});

InformacionUsuario.belongsTo(Contacto,{
    foreignKey:'contactoID',
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