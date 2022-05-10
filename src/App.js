import { useContext } from 'react';
import './App.css';
import CrudTable from './components/CrudTable/CrudTable';
import Search from './components/Search/Search';
import CrudForm from './components/CrudForm/CrudForm';
import CrudContext from './context/CrudContext';
import CrudBtnNuevo from './components/CrudBtnNuevo/CrudBtnNuevo';

function App() {

    const { pokemons, isShow } = useContext(CrudContext);

    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 className="title-header">Listado de Pokemon</h4>
                </div>
                <Search />
                <CrudBtnNuevo />
                {pokemons && (
                    <CrudTable />
                )}
                {isShow ? <CrudForm /> : ''}
            </div>
        </div>
    );
}

export default App;
