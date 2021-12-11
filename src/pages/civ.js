import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { mapData } from "../data/mapData"

const Civilization = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Civ Randomizer</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Civilization
