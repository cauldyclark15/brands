import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Footer from "components/Footer/Footer.jsx";
import pagesStyle from "assets/jss/material-dashboard-pro-react/layouts/pagesStyle.jsx";
import bgImage from "assets/img/login_bg.jpg";

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "unset";
  }

  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <div className={classes.wrapper}>
          <div
            className={classes.fullPage}
            style={{ backgroundImage: "url(" + bgImage + ")" }}
          >
            {children}
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(pagesStyle)(Pages);
