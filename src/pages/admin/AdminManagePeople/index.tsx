import React from 'react';

import AdminPage from '../../../components/AdminPage';
import ProfileCard from '../../../components/ProfileCard';
import AdminSearchBar from '../../../components/AdminSearchBar';

function AdminManagePeople() {
    return(
        <AdminPage adminSection="Pessoas">
            <AdminSearchBar />
            <ProfileCard
                username="Pedro"
                gender="M"
                bio="Programando, bebendo café e sendo muito chato o dia todinho..."
                type="Professor"
            />            
            <ProfileCard
                username="Rei da didática"
                bio="PIPI POPOPO PIPI POPOPO, Eu falo e ninguem escuta!"
                type="Professor"
            />            
            <ProfileCard
                username="NeusaGOD666"
                gender="F"
                bio="Como muda o nome? Meu neto colocou esse nome do demônio???"
                type="Aluno"
            />            
        </AdminPage>
    );
}

export default AdminManagePeople;