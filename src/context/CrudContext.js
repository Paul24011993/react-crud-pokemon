import { createContext, useEffect, useState } from 'react';
const CrudContext = createContext("");

const CrudProvider = ({ children }) => {

    const [isShow, setIsShow] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [dataSearch, setDataSearch] = useState('');
    const [dataToEdit, setDataToEdit] = useState(null);


    const handleClick = () => {
        setIsShow(!isShow);

        if (!isShow) {
            //setError(null);
        }
    };

    useEffect(() => {
        // call the function
        fetchData();

    }, []);

    // declare the data fetching function
    const fetchData = async () => {
        await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1`)
            .then((response) => response.json())
            .then((responseData) => {
                //console.log(getData)
                //SetLoadData(true);
                setPokemons(responseData);
            })
            .catch(console.log);
    };

    const handleChange = async (e) => {


        if (e.target.value === "") {
            fetchData();
            setDataSearch(e.target.value);
            return;
        }

        setDataSearch(e.target.value);

        await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1&name=${e.target.value}`)
            .then((response) => response.json())
            .then((responseData) => {
                //SetLoadData(true);
                setPokemons(responseData);
            })
            .catch(console.log);
    }

    const createData = async (data) => {
        await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ attack: data.attack, defense: data.defense, hp: data.hp, idAuthor: data.idAuthor, name: data.name, type: data.type, image: data.image })
            })
            .then((response) => response.json())
            .then((responseData) => {

                //SetLoadData(true);
                fetchData();
                //setPokemons(responseData);
            })
            .catch(console.log);
    };


    const updateData = async (data) => {
        await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ attack: data.attack, defense: data.defense, name: data.name, image: data.image })
        })
            .then((respuesta) => respuesta.json())
            .then((searchRespuesta) => {
                fetchData();
            })
            .catch(error => console.error(error));

    };


    const deleteData = async (id) => {

        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro '${id.name}'?`
        );

        if (isDelete) {
            await fetch(`https://pokemon-pichincha.herokuapp.com/pokemons/${id.id}`, {
                method: 'DELETE'
            })
                .then((respuesta) => respuesta.json())
                .then((searchRespuesta) => {
                    fetchData();
                })
                .catch(error => console.error(error));


        } else {
            return;
        }
    };

    const data = {
        isShow,
        pokemons,
        dataSearch,
        dataToEdit,
        setDataToEdit,
        createData,
        deleteData,
        updateData,
        handleChange,
        handleClick
    };
    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
};

export { CrudProvider };
export default CrudContext