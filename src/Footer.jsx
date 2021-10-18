import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer class="footer">
  <div class="footer__addr">
    
    <p class="beeptext"><i id="beep-icon"class="fad fa-bags-shopping"></i> beep</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat excepturi sequi nobis dolorem deleniti autem itaque exercitationem provident suscipit praesentium quisquam explicabo soluta voluptatibus consequuntur voluptate velit rerum at, consequatur possimus sunt totam, obcaecati rem molestias. Necessitatibus, vitae! Quisquam.</p>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Follow us</h2>

      <p>Since 1970 its been a good organisation and having very good repettion.</p>
    </li>
    
    
    <li class="nav__item">
      <h2 class="nav__title">Contact us</h2>
      <p>Contact number:009090909</p>
      <p>Mumbai,thane.</p>
      </li>
    
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div>

  </div>
</footer>
 
            )
}

export default Footer
