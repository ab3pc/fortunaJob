import React from 'react'

function Footer() {
	return (
		<footer className="footer">

			<div className="footer__logo">
			<a className="header__logo header__logo--black"  href="/">
						
				<img src="img/LogoFJblack.png" alt="CenterLogistic"/>
				<span className="header__logo-name ">Fortuna job</span></a>
			</div>
			

			<address className="footer__address">
				<p>New York, Street, ZIP code</p>
				<p>Call Us:<a href="tel:+9948373123"> +9948373123</a> or E-mail: <a
						href="mailto:hello@centerlogistic.com">
						hello@centerlogistic.com</a></p>
			</address>
			<div className="footer--links">

				<a href="text.html">Terms  Contidions</a>
				<a href="text.html">Privacy Policy</a>
				<a href="blog.html">Our blog</a>

			</div>
		</footer>
	)
}

export default Footer
