import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-info">
            <h2 className="profile-name">Pranay Mittakola</h2>
            <p className="profile-role">Fullstack Developer</p>
            <p className="profile-bio">
              Passionate about building web applications, sharing knowledge, and helping others grow.
            </p>
          </div>
        </div>

        <div className="profile-details">
          <h3>Skills</h3>
          <ul className="profile-skills">
            <li>Java</li>
            <li>React</li>
            <li>MySQL</li>
            <li>HTML/CSS</li>
            <li>Servlets</li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Uploaded Courses</h3>
          <ul className="profile-courses">
            <li>🔹 Learn Java from Scratch</li>
            <li>🔹 React Hooks Deep Dive</li>
            <li>🔹 Building Backend with Servlets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
