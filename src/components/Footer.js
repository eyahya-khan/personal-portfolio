import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import github from '../assets/img/github.jpg';
import overflow from '../assets/img/stack.jpg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <p>eyahyakhan@gmail.com <br /><br /> +46761958771</p> */}
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/eyahya-khan-a90b1125/" target={'_blank'} rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://github.com/eyahya-khan" target={'_blank'} rel="noreferrer"><img src={github} alt="Icon" /></a>
            <a href="https://stackoverflowteams.com/c/technigo/users/347" target={'_blank'} rel="noreferrer"><img src={overflow} alt="Icon" /></a>
            </div>
            <p>@eyahyakhan 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
