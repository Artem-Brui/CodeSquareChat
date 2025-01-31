import Header from '../components/layout/Header';
import useUserData from '../customHooks/useUserData';
import { getUserIdFromCookie } from '../services/getUserId';
import RoomsList from './RoomsList';

export default function Dashboard({ rooms }) {

    return (
        <div className="container dashboard">
            <Header />
            <RoomsList list={rooms} />
        </div>
    );
}
