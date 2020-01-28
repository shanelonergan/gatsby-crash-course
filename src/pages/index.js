import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer";
import Nav from "../components/nav";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <h1>Hi people</h1>
    <h2>I am Shane, a full-stack developer living in the big apple.</h2>
    <p>Need a dev? <Link to="/contact">Contact me!</Link></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Footer/>
  </Layout>
)

export default IndexPage
