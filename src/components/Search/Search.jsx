import React, { useContext, useState } from 'react';
import CrudContext from '../../context/CrudContext';
import "./search.css";


export default function Search() {

    const { dataSearch, handleChange } = useContext(CrudContext);

    return (
        <div className="col-6">
            <form className="Search form-inline">
                <div className="form-group has-search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.854" height="17.854" viewBox="0 0 17.854 17.854">
                        <g id="Elipse_1" data-name="Elipse 1" fill="#fff" stroke="#707070" strokeWidth="1">
                            <circle cx="7.5" cy="7.5" r="7.5" stroke="none" />
                            <circle cx="7.5" cy="7.5" r="7" fill="none" />
                        </g>
                        <line id="Línea_1" data-name="Línea 1" x2="5" y2="5" transform="translate(12.5 12.5)" fill="none" stroke="#707070" strokeWidth="1" />
                    </svg>


                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={dataSearch}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>


    );
}