import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      <Link to="/map/">Select Random Map</Link> <br />
      <Link to="/civ/">Select Random Civilization</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
