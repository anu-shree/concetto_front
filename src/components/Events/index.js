import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

class Events extends Component {
  classes = useStyles();
  state = {
    value: 0
  };

  handleChange = (event, newValue) => {
    this.setState({ value: event.target.newValue });
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-4 pb-5 align-items-center">
          <div className=" col-lg-6 sm-12 mt-4">
            <div className={this.classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="Vertical tabs example"
                className={this.classes.tabs}
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
              <TabPanel value={this.state.value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={this.state.value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={this.state.value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={this.state.value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={this.state.value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={this.state.value} index={6}>
                Item Seven
              </TabPanel>
            </div>
          </div>
          <div className=" col-md-6 mt-4">
            <div>
              <Card>
                <CardImg top width="100%" src="aq.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle></CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>

                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
