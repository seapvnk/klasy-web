import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function AdminSearchBar() {
    return (
        <div className="container">
            <div className="form-group">
                <select  className="form-select">
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="0" >Todos</option>
                    <option value="1" >Professores</option>
                    <option value="2" >Alunos</option>
                    <option value="3" >Funcionários</option>
                </select>
            </div>
            <div className="form-group ">
                <input type="text" placeholder="Buscar por nome" className="form-input" id=""/>
            </div>
            <div className="form-group ">
                <button className="btn btn-primary">Buscar <AiOutlineSearch /></button>
            </div>
        </div>
    );
}

export default AdminSearchBar;