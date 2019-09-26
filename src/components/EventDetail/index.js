import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
});

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="Problem Statement" {...a11yProps(1)} />
          <Tab label="Rules And regulation" {...a11yProps(2)} />
          <Tab label="Specification" {...a11yProps(3)} />
          <Tab label="Judging Parameter" {...a11yProps(4)} />
          <Tab label="Penalties" {...a11yProps(5)} />
          <Tab label="Round Task" {...a11yProps(6)} />
          <Tab label="Certification Policy" {...a11yProps(7)} />
          <Tab label="Workshops" {...a11yProps(8)} />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          In your journey into the Interstellar, you decide to rest on a planet.
          You are exploring a seemingly lonely planet when all of a sudden you
          encounter something: aliens! Your joy soon turns into fear as the
          aliens, who are now curious or maybe afraid of you, start chasing. But
          to escape those predators, you’ll be needing something really
          important: A vehicle! A vehicle hovers above the ground, water, slopes
          and most importantly, takes you to safety!
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          The team has to build a manually controlled, wireless, hovercraft that
          has the capacity to move through a predefined path. The path would
          consist of varied terrain, having potholes, water and other kinds of
          terrains as specified in the arena below. The aim of the participant
          is to rake up the maximum points to win.
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
          Maximum number of participants allowed per team is 5. However, they
          need not to be from the same college/ university/institution. One
          person would control the hover-craft from each participating team.
          Team members cannot touch the hovercraft once the event has started
          without the permission of organizing team member present there. No
          power supply would be provided during the run for any purposes,
          because the participants are required to bring wireless controllers,
          so no direct supply of power would be required. If participants are
          unable to bring wireless controller, RF transmitter and receiver will
          be provided by Team NSSC for use during the run. Also, it is the duty
          of the team members to get the requisite battery. Also voltage
          difference between any two points in the circuit of the robot cannot
          exceed 24 volts at any point of time. The bot should be capable of
          traversing through any smooth or rough terrain (like: potholes, water,
          concrete, grass, gravel etc.). Only Electric Motors have to be used in
          the hovercraft. LEGO kits and pre made mechanics set parts are not
          allowed to be used for any kind of mechanism on the bot. For further
          studies on these follow the link Teams qualifying for the first round
          only go to the second round. Rules are subject to change. Decision of
          Team NSSC will be final and binding under all circumstances.
        </TabPanel>
        <TabPanel value={this.state.value} index={3}>
          l*b = 60 * 50 cm maximum allowable limit. . Brushless motors with
          rating no more than 1500kv can be used. Participants should have the
          Motor model with them to prove the kv value when asked to do so. ESC
          current ratings not to exceed 30 A. Power supply (battery) above 12
          volts cannot be used. Minimum cushion height: 2 cm at full thrust.
          Maximum propeller diameter that can be used: 8 inch
        </TabPanel>
        <TabPanel value={this.state.value} index={4}>
          Every team will get 200 points as starting bonus. Every team will get
          800 points when the hovercraft finishes run. Time bonus will be
          awarded (in case when bot completes the task). Time Bonus= 600-(no. of
          seconds in which bot completes its run through the whole arena). Every
          team will be awarded with 50 points while clearing each checkpoint.
          Every collision with the wall of the arena attracts a penalty of 40
          points, and every collision with the obstacles attracts a penalty of
          70 points.
        </TabPanel>
        <TabPanel value={this.state.value} index={5}>
          The participant must not touch the bot during the run without taking a
          timeout. Doing so will result in a penalty of 10 points. If the
          hoverpod touches the track lines 5 points will be deducted for each
          intersection. If the hoverpod is half way out of the tracks, 10 points
          will be deducted each time. If the participants wishes to skip an
          obstacle and continue just after the obstacle, a specific amount of
          points will be deducted depending on the difficulty of the obstacle.
        </TabPanel>
        <TabPanel value={this.state.value} index={6}>
          The robot has to be placed in the starting zone before the start of
          the event. The controller would be required to stand in a marked zone,
          from where the whole arena would be clearly visible, but the
          controller in any case cannot leave the marked zone and has to control
          the hovercraft from that place only for all the time. Other team
          members cannot touch the hovercraft without permission once the run
          has started. Complete the run through the arena in 10mins. Do not
          touch obstacles placed in arena, and the walls of the arena. The whole
          track will have various checkpoints at regular intervals. The teams
          will be awarded marks according to the number of checkpoints cleared.
        </TabPanel>
        <TabPanel value={this.state.value} index={7}>
          Top 3 teams will be awarded by Certificate of Excellence for the
          event. Prize money worth 20,000 INR will be distributed to the winner
          teams. The winner team has to complete the task, if they fail to
          complete the task then they will be not eligible for certificate. If
          all the participating teams fail to solve the problem statement then,
          only appreciation certificate(s) will be distributed to the teams
          demonstrating excellent performance.
        </TabPanel>
        <TabPanel value={this.state.value} index={8}>
          To be Declared
        </TabPanel>
      </div>
    );
  }
}
EventDetail.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EventDetail);
