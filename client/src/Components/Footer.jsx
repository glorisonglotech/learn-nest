import React from "react";
import { Link } from "react-router-dom";

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
        <ul className="flex flex-col">
       <li><Link to="/courses">Courses</Link></li>
  <li><Link to="/assessments">Assessments Tracking</Link></li>
  <li><Link to="/progress">Progress</Link></li>
  <li><Link to="/communication">Communication</Link></li>
        </ul>
      </div>
      <div className="flex-1">
        <h1>Support</h1>
        <ul>
         <li><Link to="/helpCenter">Help Center</Link></li>
  <li><Link to="/documentation">Documentation</Link></li>
  <li><Link to="/contactUs">Contact Us</Link></li>
  <li><Link to="/systemStatus">System Status</Link></li>
        </ul>
      </div>
      <div className="flex-1">
        <h1>Company</h1>
        <ul>
          <li><Link to="/aboutUs" className="hover:text-blue-500">About Us</Link></li>
  <li><Link to="/privacy" className="hover:text-blue-500">Privacy</Link></li>
  <li><Link to="/terms" className="hover:text-blue-500">Terms</Link></li>
  <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
