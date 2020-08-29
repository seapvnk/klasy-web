import React from 'react';
import AdminPage from '../../../components/AdminPage';

function AdminHome() {
    const chartStyle = {
        container: {
            width: '100%',
            maxWidth: '650px',
            margin: '0px auto',
        },
        image: {
            width: '100%',
        }
    };
    const chartApi = 'https://quickchart.io';
    const chartInfo = {
        type: 'doughnut',
        data: {
            labels: ['Professores', 'Alunos'],
            datasets: [{
                data: [20, 350]
            }]
        },
        options: {
            plugins: {
                doughnutlabel: {
                    labels: [
                        {text: '370', font: {size:20}},
                        {text: 'pessoas cadastradas'}
                    ]
                }
            }
        }
    }

    const chartApiRequest = `${chartApi}/chart?c=${JSON.stringify(chartInfo)}`;

    return(
        <AdminPage>
            <h2 className="text-primary">Área administrativa</h2>
            <div className="card">
                <div style={chartStyle.container} className="card-image">
                    <img 
                        src={chartApiRequest} 
                        style={chartStyle.image}
                    />
                </div>
                <div className="card-header">
                    <div className="card-title h5">...</div>
                </div>
            </div>
        </AdminPage>
    );
}

export default AdminHome;