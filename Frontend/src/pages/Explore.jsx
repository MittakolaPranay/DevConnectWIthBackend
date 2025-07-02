import "./Explore.css";

const Explore = () => {
  const courses = [
    {
      id: 1,
      title: "React Hooks Tutorial",
      creator: "CodeWithDev",
      thumbnail: "https://via.placeholder.com/300x180?text=React+Hooks",
    },
    {
      id: 2,
      title: "Java Backend with Servlets",
      creator: "JavaMaster",
      thumbnail: "https://via.placeholder.com/300x180?text=Java+Servlets",
    },
    {
      id: 3,
      title: "Fullstack with MERN",
      creator: "DevStack",
      thumbnail: "https://via.placeholder.com/300x180?text=MERN+Stack",
    },
    {
      id: 4,
      title: "DSA in Java",
      creator: "CodeMentor",
      thumbnail: "https://via.placeholder.com/300x180?text=DSA+Java",
    },
  ];

  return (
    <div className="explore-container">
      <h2 className="explore-heading">Explore Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.title} />
            <h5>{course.title}</h5>
            <p className="creator">@{course.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
