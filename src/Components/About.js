import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var bio1 = this.props.data.bio;
      var bio2 = this.props.data.interest;
      var bio3 = this.props.data.jobsearch;
      var street = this.props.data.address.street;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Anushka Kulshreshtha Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>So glad to see you here!</h2>

            <p>{bio1}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
