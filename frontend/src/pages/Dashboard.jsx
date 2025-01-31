import { useEffect } from 'react';
import Header from '../components/layout/Header';
import useUserData from '../customHooks/useUserData';
import RoomsList from './RoomsList';

export default function Dashboard({ rooms }) {

    return (
        <div className="container dashboard">
            <Header />
            <RoomsList list={rooms} />
        </div>
    );
}
