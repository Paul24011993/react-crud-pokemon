import React, { useContext } from "react";
import CrudContext from '../../context/CrudContext';
import CrudTableRow from '../../components/CrudTableRow/CrudTableRow';
import './crudTable.css';

export default function CrudTable() {
    const { pokemons } = useContext(CrudContext);

    return (

        <div className="col-12">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.length > 0 ? (
                        pokemons.map((el) => (
                            <CrudTableRow key={el.id} el={el} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No found</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>


    );

};

