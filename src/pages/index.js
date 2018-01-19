import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Logo from '../components/Logo'


class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return ( 
            <div className="indexpage">
                <Helmet title = { siteTitle }/> 
                <div className = 'w-60-l m0 center pa4' >
                
                <Logo/>

                    <div className="mv6">
                        <h2 className = 'f3 fw5' >Hello, I’m Shreyas  <span className="ph2">—</span>  a Product Design Consultant from Hyderabad, IN. < /h2> 
                        <p className = 'f5' > I work with startups and small teams, helping them craft effective & user-friendly 
                        digital products. My professional experience also allows me to advise product leads and entrepreneurs on 
                        their Product Development and Business Strategy requirements.</p> 
                    </div>

 
            <h3 className="f5 section-title fw6"><span>Featured Case Studies</span></h3>

            <div className = 'cf' > {
                posts.map(({ node }) => {
                    const title = get(node, 'frontmatter.title') || node.fields.slug
                    const description = get(node, 'frontmatter.description') || node.fields.slug
                    return (

                        <div key = { node.fields.slug } className = "fl w-50-l pr4" >
                            <h4 className = "f4 mb3" >
                                <Link to = { node.fields.slug } > { node.frontmatter.description } </Link> 
                            </h4> 
                            <p className='captions'>{ node.frontmatter.title } <span> • </span> { node.frontmatter.date }</p>
                        </div>


                    )
                })
            } 
            </div>



            <div className="mv6">
            <h3 className="f5 mb5 section-title fw6">Additional Information</h3>
            <p> Prior to my foray into Product Design, I used to be a Business Development Professional in the Video 
            Collaboration Industry, and worked with clients like Vodafone, Essar, Capgemini etc. </p>

            <p> I hold a degree in Computer Science and Engineering from SASTRA University, and am 
            currently pursuing an MBA from the Indian School of Business, Hyderabad. </p>

            <p> I enjoy humour, music and all things food.</p>

            <p > You can reach me at < strong> mail at shreyasachar dot com < /strong></p >

            </div>
            
            <div className = "mt6" >
                <small className="colophon">Colophon <span className="ph2">—</span> This site is built using GatsbyJS and hosted on Netlify. Fonts are from Google. < /small> <
            /div> 
            </div>
            </div>

        )
    }
}

export default BlogIndex

export const pageQuery = graphql `
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            description
            theme
          }
        }
      }
    }
  }
`