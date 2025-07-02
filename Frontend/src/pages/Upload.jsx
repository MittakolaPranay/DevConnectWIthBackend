import "./Upload.css";

const Upload = () => {
  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2 className="upload-title">Upload a New Course</h2>
        <form>
          <div className="form-group">
            <label>Course Title</label>
            <input type="text" placeholder="e.g., Learn Java in 30 Days" />
          </div>

          <div className="form-group">
            <label>Thumbnail URL</label>
            <input type="text" placeholder="Paste thumbnail image URL" />
          </div>

          <div className="form-group">
            <label>Course Description</label>
            <textarea rows="4" placeholder="Brief description about the course"></textarea>
          </div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input type="number" placeholder="0 for free" />
          </div>

          <div className="form-group">
            <label>Video Link (YouTube or Drive)</label>
            <input type="text" placeholder="Paste video/course link" />
          </div>

          <button type="submit" className="upload-button">Upload Course</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
