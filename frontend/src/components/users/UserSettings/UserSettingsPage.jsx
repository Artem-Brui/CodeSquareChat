
import UserSettingsImages from './UserSettingsImages';
import UserSettingsElement from './UserSettingsElement';

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
