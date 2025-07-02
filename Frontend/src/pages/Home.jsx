import "./Home.css";

const Home = () => {
  return (
    <div className="dashboard-container">
      <section className="welcome-section">
        <h1>Welcome to DevConnect 👨‍💻</h1>
        <p>
          A community for developers to <strong>learn, teach, and earn</strong> by sharing short coding videos,
          uploading courses, and helping each other grow.
        </p>
      </section>

      <section className="grid-section">
        <div className="grid-card">
          <h2>🎥 Reels</h2>
          <p>Explore short dev videos & coding tricks uploaded by the community.</p>
          <a href="/reels">View Reels</a>
        </div>
        <div className="grid-card">
          <h2>📚 Courses</h2>
          <p>Watch or upload complete courses. Free and paid options available.</p>
          <a href="/explore">Explore Courses</a>
        </div>
        <div className="grid-card">
          <h2>⬆️ Upload</h2>
          <p>Become a creator. Upload coding content and share your skills.</p>
          <a href="/upload">Upload Now</a>
        </div>
        <div className="grid-card">
          <h2>🧑‍💼 Profile</h2>
          <p>Manage your bio, skills, and uploaded content in your profile.</p>
          <a href="/profile">Go to Profile</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
