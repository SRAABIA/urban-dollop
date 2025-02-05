import React from 'react';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <div className="container">
        <p>&copy; 2025 MyFood | Follow us on 
          <a href="https://www.instagram.com/myfood.id/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a> 
          and 
          <a href="https://www.facebook.com/myfood.id/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a> 
          | Contact: info@myfood.id
        </p>
      </div>
    </footer>
  );
}

