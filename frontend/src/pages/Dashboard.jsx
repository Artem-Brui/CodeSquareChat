import Header from '../components/layout/Header';
import RoomsList from './RoomsList';

export default function Dashboard() {
  return (
        <div className="container dashboard">
            <Header />
            <RoomsList />
        </div>
    );
}
