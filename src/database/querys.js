const queries = {
    getCliente : "SELECT * FROM Cliente",
    postCliente : "INSERT INTO Cliente (RasonSocial_C, Contactos_C, Cuil_C, ingresosBruos_C, Telefono_C, Email_C) VALUES (@RasonSocial_C, @Contactos_C, @Cuil_C, @ingresosBruos_C, @Telefono_C, @Email_C)",
    getClienteByCuil: "SELECT * FROM Cliente WHERE Cuil_C = @Cuil_C",
    deleteClienteByCuil: "DELETE FROM Cliente WHERE Cuil_C = @Cuil_C",
    getTotalCliente: "SELECT COUNT(*) FROM Cliente",
    updateClienteByCuil: "UPDATE Cliente SET RasonSocial_C = @RasonSocial_C, Contactos_C = @Contactos_C, Cuil_C = @Cuil_C, ingresosBruos_C = @ingresosBruos_C, Telefono_C = @Telefono_C, Email_C = @Email_C WHERE IdCliente = @IdCliente"
}

module.exports = queries;