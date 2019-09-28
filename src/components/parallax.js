import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';

const styles = theme => ({
  container: {
    margin: '100px',
  },
  images:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: "all 0.3s linear",
    padding: 0,
    height: '40vh',
    position: 'relative',
  },
  image1:{
   height: '70%',
   position: 'absolute',
   left: '150px',
   opacity: 0.8,
   zIndex: 2000,
   bottom: 20,
   margin: 0,
   padding: 0,
  },
  image1M:{
  },
  image2:{
    position: 'relative',
    padding: 0,
    bottom: 40,
    height: '100%',
    margin: 0,
  },
  image2M:{
  },
  image3:{
   height: '70%',
   position: 'absolute',
   right: '130px',
   opacity: 0.8,
   zIndex: 2000,
   margin: 0,
   padding: 0,
   bottom: 0,
  },
  image3M: {
  },
  text:{
      position: 'relative',
      textAlign: 'center',
      padding: 0,
      zIndex: 4000,
  },
});
class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.parent = React.createRef();
    this.parentOffsetTop = 0;
  }
  componentDidMount() {
    this.parentOffsetTop = this.parent.current.getBoundingClientRect().top;
    // console.log(this.parentOffsetTop);
  }
  render() {
    const { classes,image1,image2,image3,x } = this.props;
    return (
    <div className={classNames(classes.container,"container")}>
     <div className="row">
       <div ref={this.parent} className={(window.innerWidth>600)?classNames(classes.images,"col-6"):"col-12"}>
         <img style={(window.innerWidth> 600)?{ transform: `translateY(${-(-this.parentOffsetTop+x)/8}px)`}: null } src={image1} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image1,"col-offset-2 col-8 col-md-2","image1"):classNames(classes.image1M,"col-4")} />
         <img style={(window.innerWidth> 600)?{ transform: `translateY(${(-this.parentOffsetTop+x)/16}px)` }: null} src={image2} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image2,"col-offset-2 col-8 col-md-3","image2"):classNames(classes.image2M,"col-4")} />
         <img style={(window.innerWidth> 600)?{ transform: `translateY(${-(-this.parentOffsetTop+x)/2}px)` }: null} src={image3} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image3,"col-offset-2 col-8 col-md-2","image3"):classNames(classes.image3M,"col-4")} />
       </div>
       <div className={(window.innerWidth>600)?classNames(classes.text,"col-12 col-md-3"):classNames("col-12 col-md-3")} style={{textAlign:'center',}}>
        <h1>Some heading here</h1>
         this is a random text and I wish to make it longer to understand how it behaves so there is a lot of dummy text in it to make sure how it behave for big text
       </div>
      </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Parallax);