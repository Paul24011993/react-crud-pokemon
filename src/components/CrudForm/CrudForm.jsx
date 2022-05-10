import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../../context/CrudContext";
import './crudForm.css';

const initailForm = {
    name: "",
    image: "",
    attack: 0,
    defense: 0,
    idAuthor: 1,
    type: "normal",
    hp: 100,
    id: null,
};

const CrudForm = () => {

    const { createData, updateData, dataToEdit, setDataToEdit } = useContext(CrudContext);
    const [form, setForm] = useState(initailForm);

    useEffect(() => {
        const ele = document.querySelector('.buble');
        if (ele) {
            ele.style.left = `${Number(form.attack * 2.7)}px`;
        }
        const defense = document.querySelector('.buble-defense');
        if (defense) {
            defense.style.left = `${Number(form.defense * 2.7)}px`;
        }
    })

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initailForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            [e.target.image]: e.target.value,
            [e.target.attack]: e.target.value,
            [e.target.defense]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.image) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            console.log(form);
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initailForm);
        setDataToEdit(null);
    };

    return (

        <div className="col-12">
            <div className="container-forms">
                <h4 className="title_form">{dataToEdit ? "Editar" : "Nuevo"} Pokemon</h4>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group row">
                                    <label htmlFor="inputName" className="col-2 col-form-label">Nombre</label>
                                    <div className="col-10">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="inputName"
                                            placeholder="Nombre"
                                            onChange={handleChange}
                                            value={form.name}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputImage" className="col-2 col-form-label">Imagen</label>
                                    <div className="col-10">
                                        <input
                                            type="text"
                                            name="image"
                                            className="form-control"
                                            id="inputImage"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={form.image}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group row">
                                    <label htmlFor="inputPassword" className="col-2 col-form-label">Ataque</label>
                                    <div className="col-10">

                                        <div className="slider-parent">
                                            0<input
                                                type="range"
                                                name="attack"
                                                value={form.attack}
                                                onChange={handleChange}
                                                min="0"
                                                max="100"
                                                className="form-control slider"
                                                step="1"
                                            />100
                                            <div className="buble">
                                                {form.attack}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword" className="col-2 col-form-label">Defensa</label>
                                    <div className="col-10">
                                        <div className="slider-parent">
                                            0<input
                                                type="range"
                                                name="defense"
                                                value={form.defense}
                                                onChange={handleChange}
                                                min="0"
                                                max="100"
                                                className="form-control slider"
                                                step="1"
                                            />100
                                            <div className="buble-defense">
                                                {form.defense}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-flex justify-content-around m-auto">
                                <button
                                    type="submit"
                                    className="btn btn-danger btn-w-default"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 12">
                                        <path id="iconmonstr-save-3" d="M7.5,1.5H9V4H7.5ZM12,2V12H0V0H10ZM2.5,4.5h7V1h-7Zm8,2h-9V11h9Zm-1,1h-7V8h7Zm0,1h-7V9h7Zm0,1h-7V10h7Z" fill="#fff" />
                                    </svg>

                                    {dataToEdit ? "Actualizar" : "Guardar"}
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-danger btn-w-default"
                                    onClick={handleReset}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9.713 9.713">
                                        <line id="Línea_1" data-name="Línea 1" y1="12" transform="translate(9.385 0.92) rotate(49)" fill="none" stroke="#fff" strokeWidth="2" />
                                        <line id="Línea_2" data-name="Línea 2" x2="12" transform="translate(0.92 0.328) rotate(49)" fill="none" stroke="#fff" strokeWidth="2" />
                                    </svg>

                                    Cancelar
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default CrudForm;