import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Timeline from "@material-ui/icons/Timeline";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Wrapper from "../layouts/Dashboard";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  multipleBarsChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>person</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Active Employees</p>
                  <h3 className={classes.cardTitle}>49</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Active Employees
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <Icon>calendar_today</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Next Payroll Date</p>
                  <h3 className={classes.cardTitle}>Mon, Jan 10</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Next Payroll Date</div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <Icon>attach_money</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>
                    Total Cash Last Payroll
                  </p>
                  <h3 className={classes.cardTitle}>$4533.25</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Total Cash Last Payroll</div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icon>av_timer</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>
                    Total Hours Last Payroll
                  </p>
                  <h3 className={classes.cardTitle}>23</h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Total Hours Last Payroll</div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                    <Timeline />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>Payroll by date</h4>
                </CardHeader>
                <CardBody>
                  <ChartistGraph
                    data={multipleBarsChart.data}
                    type="Bar"
                    options={multipleBarsChart.options}
                    listener={multipleBarsChart.animation}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart className={classes.cardHover}>
                <CardHeader color="info" className={classes.cardHeaderHover}>
                  <ChartistGraph
                    className="ct-chart-white-colors"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="Refresh"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button simple color="info" justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Change Date"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                  <h4 className={classes.cardTitle}>Daily Sales</h4>
                  <p className={classes.cardCategory}>
                    <span className={classes.successText}>
                      <ArrowUpward className={classes.upArrowCardCategory} />{" "}
                      55%
                    </span>{" "}
                    increase in today sales.
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> updated 4 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart className={classes.cardHover}>
                <CardHeader color="warning" className={classes.cardHeaderHover}>
                  <ChartistGraph
                    className="ct-chart-white-colors"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={
                      emailsSubscriptionChart.responsiveOptions
                    }
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="Refresh"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button simple color="info" justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Change Date"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                  <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card chart className={classes.cardHover}>
                <CardHeader color="danger" className={classes.cardHeaderHover}>
                  <ChartistGraph
                    className="ct-chart-white-colors"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <div className={classes.cardHoverUnder}>
                    <Tooltip
                      id="tooltip-top"
                      title="Refresh"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button simple color="info" justIcon>
                        <Refresh className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="tooltip-top"
                      title="Change Date"
                      placement="bottom"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button color="transparent" simple justIcon>
                        <Edit className={classes.underChartIcons} />
                      </Button>
                    </Tooltip>
                  </div>
                  <h4 className={classes.cardTitle}>Completed Tasks</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </Wrapper>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
