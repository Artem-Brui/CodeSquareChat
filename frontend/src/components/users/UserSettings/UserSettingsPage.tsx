import '@/assets/main.css';
import UserSettingsImages from './UserSettingsImages/UserSettingsImages';
import UserSettingsElement from './UserSettingsElement/UserSettingsElement';

export default function UserSettingsPage() {
  return (
    <div className="container">
      <div className="other-user-profile-settings">
        <UserSettingsImages />
        <UserSettingsElement />
      </div>
    </div>
  );
}
