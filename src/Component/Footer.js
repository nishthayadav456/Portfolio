import React from 'react'
import './Footer.css'
const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <>
      <div className='footer'>
<div className='container footer_container'>
<div className='first_div'>
<h4>Nishtha Yadav</h4>
<p>© {year} Nishtha Yadav All rights reserved</p>
<p className='icon_div'>
<i class="fa-brands fa-linkedin mx-3"></i>
<i class="fa-brands fa-facebook mx-3"></i>
<i class="fa-brands fa-square-instagram mx-3"></i>
<i class="fa-brands fa-square-twitter mx-3"></i>

</p>
</div>
<div className='Second_div'>
<h4>Get In Touch</h4>
<p>nishthayadav1122@gmail.com</p>
<p>+918171840783</p>
</div>
<div className='third_div'>
<h4>About</h4>
<p>Resume</p>
</div>
</div>
      </div>
    </>
  )
}

export default Footer
