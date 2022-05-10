import React, { useContext, useState } from 'react';
import CrudContext from '../../context/CrudContext';
import "./CrudBtnNuevo.css";

export default function CrudBtnNuevo() {

    const { handleClick } = useContext(CrudContext);

    return (
        <div className="col-6 text-right">
            <button
                type="button"
                className="btn"
                onClick={handleClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                    <line id="Línea_1" data-name="Línea 1" y1="12" transform="translate(6)" fill="none" stroke="#fff" strokeWidth="2" />
                    <line id="Línea_2" data-name="Línea 2" x2="12" transform="translate(0 6)" fill="none" stroke="#fff" strokeWidth="2" />
                </svg>
                Nuevo
            </button>
        </div>


    );
}