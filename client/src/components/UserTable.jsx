import React from 'react';


function UserTable({ users, onEdit, onDelete }) {

    if (users.length === 0) {
        return <p>📭 No hay usuarios registrados.</p>;
    }

    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>👤 Nombre Completo</th>
                    <th>📧 Email</th>
                    <th>📱 Teléfono</th>
                    <th>⚙️ Acciones</th>
                </tr>
            </thead>
            <tbody>

                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td className="actions">

                            <button className="btn btn-edit" onClick={() => onEdit(user)}>
                                <span>✏️ Editar</span>
                            </button>
                            <button className="btn btn-delete" onClick={() => onDelete(user.id)}>
                                <span>🗑️ Eliminar</span>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
