import React from 'react'
import Link from 'gatsby-link'
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import './styles.scss'
import Footer from '../components/footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
       <div> 
        <Helmet
        title="Shreyas Achar"
        meta={[
        { name: 'description', content: 'Personal Website' },
        { name: 'keywords', content: 'shreyas, achar, product, design, strategy, hyderabad, isb' },
        ]}
        >
        <html lang="en" />
        </Helmet> 

        <div className="sec-2 mainheader">
          <div className="hl">
            <Link to={'/'} aria-label="Home">
                <h1 className ='icons__logo'>Shreyas Achar</h1>
            </Link>
          </div>
          <div className="pr">
                
          </div>
        </div>
        </div>
      )
    } else {
      header = (
      <div> 
        <div className="sec-2">
          <div className="hl">
            <Link to={'/'} aria-label="Home">
                <h1 className ='icons__logo'>Shreyas Achar</h1>
            </Link>
          </div>
          <div className="pr">
                <h1 className ='heading__logotype'></h1>
          </div>
        </div>
        </div>
      )
    }
    return (
      <div>
        {header}
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template