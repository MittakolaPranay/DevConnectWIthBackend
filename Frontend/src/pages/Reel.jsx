import "./Reel.css";

const Reels = () => {
  const reelsData = [
    {
      id: 1,
      title: "How to reverse a Linked List",
      creator: "CodeWithDev",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "JavaScript Closure Explained",
      creator: "JSMaster",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "OOP in Java in 60 seconds",
      creator: "DevSprint",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <div className="reels-container">
      {reelsData.map((reel) => (
        <div className="reel-card" key={reel.id}>
          <video className="reel-video" controls loop>
            <source src={reel.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="reel-info">
            <h3>{reel.title}</h3>
            <p>@{reel.creator}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
