import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "assets/jss/material-dashboard-pro-react/components/footerStyle";

function Footer({ ...props }) {
  const { classes, fluid, white } = props;
  let container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  let anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left} />
        <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          <a
            href="https://www.linkedin.com/in/joselie-castaneda-b4774b6a/"
            className={anchor}
          >
            Joselie Castaneda
          </a>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
