import MyLogo from '../../assets/myLogo.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={MyLogo} alt="logo" className="logo-footer" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;