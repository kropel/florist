import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Oferta" />
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa magni
      necessitatibus aliquid cupiditate sed accusantium veniam repellendus
      voluptatibus expedita tenetur?
    </h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
