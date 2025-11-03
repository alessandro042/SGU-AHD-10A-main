import React, { useState, useEffect } from 'react';


const emptyForm = { fullName: '', email: '', phoneNumber: '' };


function UserForm({ currentUser, onSave, onCancel }) {
    const [formData, setFormData] = useState(emptyForm);


    useEffect(() => {
        if (currentUser) {

            setFormData(currentUser);
        } else {

            setFormData(emptyForm);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">

            <h3>{currentUser ? '✏️ Editar Usuario' : '➕ Nuevo Usuario'}</h3>

            <div className="form-group">
                <label htmlFor="fullName">Nombre Completo</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre completo"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="usuario@ejemplo.com"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Número de Teléfono</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                    required
                />
            </div>

            <div className="form-buttons">
                <button type="submit" className="btn btn-primary">
                    <span>{currentUser ? '💾 Actualizar' : '💾 Guardar'}</span>
                </button>


                {currentUser && (
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        <span>✖️ Cancelar</span>
                    </button>
                )}
            </div>
        </form>
    );
}

export default UserForm;
