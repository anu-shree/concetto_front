import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from 'classnames';

const styles = theme => ({
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
   bottom: 40,
   margin: 0,
   padding: 0,
  },
  image1M:{
  },
  image2:{
    position: 'relative',
    padding: 0,
    bottom: 90,
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
  componentDidMount(){
    if(window.innerWidth> 600){
    window.addEventListener('scroll',this.handleScroll);
    }
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    var x=window.scrollY;
    var $image1 = document.getElementById('image1');
    $image1.style.transform = 'translateY(-' + x/8 + 'px)';

    var $image2= document.getElementById('image2');
    $image2.style.transform = 'translateY(' + x/16 + 'px)';

    var $image3 = document.getElementById('image3');
    $image3.style.transform = 'translateY(-' + x/4 + 'px)';
  }
  render() {
    const { classes,image1,image2,image3 } = this.props;
    return (
    <div className="container">
     <div className="row">
       <div className={(window.innerWidth>600)?classNames(classes.images,"col-6"):"col-12"}>
         <img src={image1} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image1,"col-offset-2 col-8 col-md-2"):classNames(classes.image1M,"col-4")} id="image1"/>
         <img src={image2} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image2,"col-offset-2 col-8 col-md-3"):classNames(classes.image2M,"col-4")} id="image2"/>
         <img src={image3} alt="Loading..." className={(window.innerWidth>600)?classNames(classes.image3,"col-offset-2 col-8 col-md-2"):classNames(classes.image3M,"col-4")} id="image3"/>
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