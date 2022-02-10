import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroSection from "../components/HeroSection/index"
import Image from "../components/image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
   <HeroSection />
   <Image />
 
  </Layout>
)

export default IndexPage
