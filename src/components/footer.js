import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return(

    	<div className="sec-2 footer">
          <div className="hl">
            <ul className="list pl0 footer__menu">
				  <li className="dib mr4 icons__email"><a href="mailto:mail@shreyasachar.com" target="_blank" rel="noopener" className="link dim">E-mail</a></li>
  				<li className="dib mr4 icons__linkedin"><a href="https://www.linkedin.com/in/shreyas-achar-392b94134/" rel="noopener" target="_blank" className="link dim">LinkedIn</a></li>
          <li className="dib mr4 icons__medium"><a href="https://medium.com/@shreyasachar" rel="noopener" target="_blank" className="link dim">Medium</a></li>
			</ul> 
          </div>
<div className="pr-r">


</div>
<p className="colophon">© Shreyas Achar 2018 • Built on <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener" className="b">GatsbyJS</a> and hosted on <a href="https://www.netlify.com/" target="_blank" rel="noopener" className="b">Netlify</a></p>
</div>
)
    
  }
}

export default Footer