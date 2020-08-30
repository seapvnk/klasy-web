import React from 'react';
import AdminPage from '../../../components/AdminPage';
import ChartImage from '../../../components/ChartImage';

function AdminHome() {
    

    return(
        <AdminPage>
            <h2 className="text-primary">Área administrativa</h2>
            <div className="card">
                <ChartImage 
                    chartText="Total de cadastros"
                    chartInformation={[
                        {label: "Professores", quantity: 23},
                        {label: "Alunos", quantity: 312},
                    ]} 
                />
            </div>
        </AdminPage>
    );
}

export default AdminHome;