import React, { Component } from "react";
import "./Home.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <h1 className="student-count">
            Total Students <CountUp end={150} duration={3} />
          </h1>
        </div>
        <div className="student-details">
          <div className="student-data">
            <p className="dept">IT Students</p>

            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          <div className="student-data">
            <p className="dept">CSE Students</p>
            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          <div className="student-data">
            <p className="dept">ECE Students</p>
            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          <div className="student-data">
            <p className="dept">MECH Students</p>
            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          <div className="student-data">
            <p className="dept">EEE Students</p>
            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
          <div className="student-data">
            <p className="dept">CIVIL Students</p>
            <div className="student-class-count">
              <h3>
                Boys:
                <CountUp end={26} duration={2} />
              </h3>
              <h3>
                Girls:
                <CountUp end={24} duration={2} />
              </h3>
              <h3>
                Total:
                <CountUp end={60} duration={2} />
              </h3>
            </div>
            <div className="get-details">
              <Link to="/it-students-details" className="get-start">
                <a href="#a">Get Start</a>
                <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
