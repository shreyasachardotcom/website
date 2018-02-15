import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'


class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')
         
         return ( 
            <div className="indexpage">
                <Helmet title = { siteTitle }/> 

          <div className="w-70-l ph5-ns ph3 mb5 pv4-ns pv2">
            <p className='lh-title f2-ns f3 pa1 fw7'>Hello, I'm Shreyas — a Product Design & Strategy Consultant from Hyderabad, IN</p>
            <p className="pa1">I work with startups and small teams, helping them craft effective & user-friendly 
                        digital products. My professional experience also allows me to advise product leads and entrepreneurs on 
                        their Product Development and Business Strategy requirements.</p>            
          </div>  

                <div className="cs-fw featured__work pv5">
                <div className="w-80-l ph5-ns ph3 mb4">
                <div className = 'cf' > {
                            posts.map(({ node }) => {
                            const title = get(node, 'frontmatter.title') || node.fields.slug
                            const description = get(node, 'frontmatter.description') || node.fields.slug
                            return (

                            <div key = { node.fields.slug } className = "fl w-50-l pr4 pb2 mb4" >
                            <p className = "f3-ns f4 b mb2" >
                                <Link to = { node.fields.slug } > { node.frontmatter.description } </Link> 
                            </p> 
                            <p className='ttu tracked f7 b silver'>{ node.frontmatter.title } <span> • </span> { node.frontmatter.date }</p>
                            </div>
                            )
                            })
                            } 
                        </div>
                </div>
                </div>

                <div className="cs-fw pv5">
                 <div className="w-70-l ph5-ns ph3 mb4">
            <p className="pa1">Prior to my foray into Product Design, I used to be a Business Development Professional in the Video 
                        Collaboration Industry working on technologies like IP Streaming, Video Content Delivery, Digital Signage, Video Conferencing & Telepresence. </p>

                        <p className="pa1">I hold a degree in Computer Science and Engineering from SASTRA University, and am 
                        currently pursuing an MBA from the Indian School of Business, Hyderabad. </p>

                        <p className="pa1"> I enjoy humour, music and all things food.</p>


                        <a className="f6 link dim br1 ba pa3 mt4 dib ma1" href="https://www.dropbox.com/s/k1rzbr6tc0xau3e/ShreyasAchar_CV022018.pdf?dl=1" rel="noopener"><span className="dib mr2 v-mid icons__pdf">PDF</span> <span className="ttu tracked f7 b">Download Resume</span></a>
              </div>
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

