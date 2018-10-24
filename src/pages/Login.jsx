import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import { withRouter } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Pages from "../layouts/Pages";
import { AppConsumer } from "../appContext";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardAnimaton: "cardHidden",
      emailError: "",
      passError: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("auth-token");
    if (token && token === "1515") {
      this.props.history.push("/");
    }

    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  render() {
    const { classes, history } = this.props;
    const { passError, emailError } = this.state;
    return (
      <AppConsumer>
        {({ auth }) => (
          <Pages>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={4}>
                  <form
                    onSubmit={async event => {
                      event.preventDefault();

                      const email = event.target["email"].value;
                      const password = event.target["password"].value;

                      if (email === "a@a.com" && password === "123456") {
                        await Promise.resolve(auth());
                        return history.push("/");
                      } else {
                        if (email !== "a@a.com") {
                          this.setState({
                            emailError: "Invalid email, please use <a@a.com>"
                          });
                        }

                        if (password !== "123456") {
                          this.setState({
                            passError: "Invalid password, please use <123456>"
                          });
                        }

                        return null;
                      }
                    }}
                  >
                    <Card login className={classes[this.state.cardAnimaton]}>
                      <CardHeader
                        className={`${classes.cardHeader} ${
                          classes.textCenter
                        }`}
                        color="rose"
                      >
                        <h4 className={classes.cardTitle}>
                          Sign in to account analytics
                        </h4>
                        <div className={classes.socialLine}>
                          {[
                            "fab fa-facebook-square",
                            "fab fa-twitter",
                            "fab fa-google-plus"
                          ].map((prop, key) => {
                            return (
                              <Button
                                color="transparent"
                                justIcon
                                key={key}
                                className={classes.customButtonClass}
                              >
                                <i className={prop} />
                              </Button>
                            );
                          })}
                        </div>
                      </CardHeader>
                      <CardBody>
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          type="email"
                          autoComplete="user-email"
                          onFocus={() => this.setState({ emailError: "" })}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            )
                          }}
                        />
                        {!!emailError && (
                          <span
                            style={{
                              color: "#e74c3c",
                              fontSize: 10,
                              letterSpacing: 0.6
                            }}
                          >
                            {emailError}
                          </span>
                        )}
                        <CustomInput
                          labelText="Password"
                          id="password"
                          type="password"
                          autoComplete="current-password"
                          onFocus={() => this.setState({ passError: "" })}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                        {!!passError && (
                          <span
                            style={{
                              color: "#e74c3c",
                              fontSize: 10,
                              letterSpacing: 0.6
                            }}
                          >
                            {passError}
                          </span>
                        )}
                      </CardBody>
                      <CardFooter className={classes.justifyContentCenter}>
                        <Button
                          color="rose"
                          simple
                          size="lg"
                          block
                          type="submit"
                        >
                          SIGN IN
                        </Button>
                      </CardFooter>
                    </Card>
                  </form>
                </GridItem>
              </GridContainer>
            </div>
          </Pages>
        )}
      </AppConsumer>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(withRouter(LoginPage));
