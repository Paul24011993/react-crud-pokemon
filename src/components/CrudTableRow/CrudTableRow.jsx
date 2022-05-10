import React, { useContext } from "react";
import './crudTableRow.css';
import CrudContext from "../../context/CrudContext";

const CrudTableRow = ({ el }) => {

    const { setDataToEdit, deleteData } = useContext(CrudContext);

    return (

        <tr>
            <td>{el.name}</td>
            <td className="text-center"><img src={el.image} width="40" alt="" /></td>
            <td>{el.attack}</td>
            <td>{el.defense}</td>
            <td>
                <div className="d-flex justify-content-around row-icons-actions">
                    <button className="" onClick={() => { setDataToEdit(el) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15.5 17">
                            <path id="iconmonstr-pencil-2" d="M11.444,1.768l1.789,1.788-9.4,9.4L1.6,13.4l.452-2.24,9.394-9.395Zm0-1.768L.9,10.545,0,15l4.454-.9L15,3.556,11.444,0Z" fill="#7164fb" />
                            <line id="Línea_3" data-name="Línea 3" x2="15.5" transform="translate(0 16.5)" fill="none" stroke="#7164fb" strokeWidth="2" />
                        </svg>
                    </button>
                    <button className="" onClick={() => deleteData(el)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16.8" viewBox="0 0 14 16.8">
                            <path id="iconmonstr-trash-can-29" d="M13.9,16.8H4.1a1.4,1.4,0,0,1-1.4-1.4V4.2H15.3V15.4A1.4,1.4,0,0,1,13.9,16.8ZM9,9.51l2.305-2.305.99.99L9.99,10.5l2.305,2.305-.99.99L9,11.49,6.695,13.795l-.99-.99L8.01,10.5,5.705,8.195l.99-.99ZM16,3.5H2V2.1H6.2V1.05A1.051,1.051,0,0,1,7.25,0h3.5A1.051,1.051,0,0,1,11.8,1.05V2.1H16ZM10.4,1.4H7.6v.7h2.8Z" transform="translate(-2)" fill="#7164fb" fillRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>

    );
};

export default CrudTableRow;