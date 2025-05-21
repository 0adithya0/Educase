import './AccountPage.css';

function AccountPage() {
  return (
    <div className="mobile-wrapper">
    <div className="account-container" >
      <h2 className="account-heading">Account Settings</h2>

      <div className="account-card">
        <div className="account-top">
          <div className="avatar-wrapper">
            <img
              className="avatar"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div className="user-info">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
    </div>
  );
}

export default AccountPage;
