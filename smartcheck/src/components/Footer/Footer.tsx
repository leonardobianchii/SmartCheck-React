import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div id="footer-container">
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: heitor.ortega16@gmail.com</p>
          <p>Telefone: (11) 94743-1188</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <a href="https://www.facebook.com">Facebook</a><br />
          <a href="https://www.twitter.com">Twitter</a><br />
          <a href="https://www.instagram.com">Instagram</a><br />
        </div>
        <div className="footer-section">
          <h3>Endereço</h3>
          <p>Av. Paulista, 1106</p>
          <p>Bela Vista, São Paulo</p>
          <p>CEP: 01311-000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
