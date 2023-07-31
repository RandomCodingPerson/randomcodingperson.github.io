import React from "react";
import '../assets/css/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function App() {

  return (
    <footer>
      <h5>Made with ❤️ by Vibhuv Sharma</h5>
      <h5>&copy; 2023 Vibhuv Sharma</h5>
      <div class='icons'>
        <a href='https://linkedin.com' target='__blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href='mailto:vibhuvnaraya.sharma@gmail.com' target='__blank'><FontAwesomeIcon icon={faAt} /></a>
        <a href='https://github.com/RandomCodingPerson/' target='__blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='tel:9083611500' target='__blank'><FontAwesomeIcon icon={faPhone} /></a>
      </div>

    </footer>
  );
}