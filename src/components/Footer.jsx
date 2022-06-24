import React from 'react'
import { Link } from 'react-router-dom';
import '../css/footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Radno vreme</h2>
                <p>Radnim danima: 7:00 - 20:00</p>
                <p>Vikendom: 8:00 - 18:00</p>
          </div> 
          <div class='footer-link-items'>
            <h2>Kontakt</h2>
                <p> +123456789</p>
                <p>mojebrdo@gmail.com</p> 
                <p>Pozeska 11</p>
                <p>Belgrade, Serbia</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Teretana
            </Link>
          </div>
          <small class='website-rights'>Moje brdo © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
