import React from 'react'
import Link from 'gatsby-link'


class Logo extends React.Component {
  render() {
    return(
      <div className='w-10-ns'>
            <Link to = '/' >
              <h1 className ='header__logo'>Shreyas Achar</h1>
            </Link>
          </div>
      )
    
  }
}

export default Logo