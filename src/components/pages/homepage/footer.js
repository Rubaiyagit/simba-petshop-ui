import { Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {


    return (
        <div>
            <Container>
                <div className="footer">
                <h1>Follow us on :</h1>
                <FacebookIcon/>
                <InstagramIcon/>   
                </div>
            </Container>
            <p className="copyright">Copyright 2021</p>
        </div>
     
    );
  }
  