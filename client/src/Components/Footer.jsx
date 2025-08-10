import React from "react";

function Footer() {
  return (
    <div className="flex gap-4 ">
      <div className="flex-1">
        <h1>LearnNest</h1>
        <p>
          Empowering educators and students with a comprehensive learning
          management system designed for academic success.
        </p>
      </div>
      <div className="flex-1">
        <h1>Product</h1>
        <ul>
          <li>Course</li>
          <li>Assesemnet Tracking</li>
          <li>Progress</li>
          <li>Communication</li>
        </ul>
      </div>
      <div className="flex-1">
        <h1>Support</h1>
        <ul>
          <li>Help Center</li>
          <li>Documentation</li>
          <li>Comtact us</li>
          <li>System status</li>
        </ul>
      </div>
      <div className="flex-1">
        <h1>Company</h1>
        <ul>
          <li>About Us</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
