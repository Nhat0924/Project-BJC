import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    const navigate = useNavigate();

    const handleSignOut = () => {
      navigate("/"); // Redirect to login page
    };


  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1>BJC</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Assignments</li>
            <li>Lessons</li>
            <li>Progress</li>
            <li>Track</li>
            <li>Account</li>
          </ul>
        </nav>
        <button className="signout-button" onClick={handleSignOut}>
          Sign out
        </button>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <input type="text" placeholder="Search for Lesson..." className="search-bar" />
        </header>
        <section className="courses">
          <h1>Courses</h1>          
          <div className="course-list">
            <div className="course-card">Brady Lesson Here</div>
            <div className="course-card">Nhat Lesson Here</div>
            <div className="course-card">Blake Lesson Here</div>
            <div className="course-card">Projects</div>
            <div className="course-card">Tags & Elements</div>
            <div className="course-card">Styling with CSS</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
