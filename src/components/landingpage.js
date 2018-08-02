import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margine: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://s15.postimg.cc/ohqb0skh7/Logocoin.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Hobby Programmer</h1>
              <hr />
              <p>C# | JavaScript | Unity3D | NodeJS | Discord.JS</p>
              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/CreedsCode"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/creedscode/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCnZh8MLnCOugySmVjay55dA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
