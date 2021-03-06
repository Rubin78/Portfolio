// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// class Second extends Component {
//     render() {
//         console.log(this.props);
//         return (



            
//             <div>
//                 <Link to="/third" >Go to the third page</Link>

//         <div>{this.props.location.state}</div>
//             </div>
//         );
//     }
// }

// export default Second;








import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Container, Row, Col} from 'reactstrap';
import styles  from '../components/Second.css'
import hero1 from '../assests/hero1.jpg';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <Container fluid  className="containerBody2" style={{  backgroundImage:`url(${hero1})`,}} >
    <div style={{backgroundColor:'transparent',height:80,display:'flex'}}>
      <Navbar color="red" light expand="md"  style={{display:'flex',flex:1,}} >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar>
        
         
           
         </Nav>

         <NavLink href="/components/">Home</NavLink>
         <NavLink href="/components/">About</NavLink> 
          <NavLink href="/components/">Skills</NavLink>
          <NavLink href="/components/">Experience</NavLink>
          <NavLink href="/components/">Project</NavLink>
          <NavLink href="/components/">Contact</NavLink>
        </Collapse>
      </Navbar>
    </div>


<div  Col-sm-12  style={{ display:'flex',height:600,flex:1,
alignItems:'space-between',justifyContent:'center',paddingLeft:40,}}>
<div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start'}} > 
    <div style={{color:'white',fontSize:50,textAlign:'center'}} >Rubin design +
   <p>  innovation</p></div>
    {/* <button onClick={this.submitHandler} >go to second page</button> */}
    </div>
</div>
    </Container>
  );
}

export default Example;