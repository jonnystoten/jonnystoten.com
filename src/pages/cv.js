import React from "react";
import g from "glamorous";
import FontAwesome from 'react-fontawesome'

import { Experience } from "../components/experience"
import { MarkdownHtml } from "../components/markdown-html"
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { mediaQueries } from "../utils/media-queries";
import { PrintOnly } from "../utils/print-only";
import { PrintPageBreak } from "../utils/print-page-break";

const Profile = g.div({
  display: "flex",
  justifyContent: "flex-end",
  [mediaQueries.phone]: {
    display: "initial"
  }
})

const ContactData = g.div({
  textAlign: "right",
  // [mediaQueries.phone]: {
  //   textAlign: "initial"
  // }
})

export default ({ data }) => (
  <div>
    <Profile>
      <g.Div flex="1">
        <h1>{data.me.name}</h1>
        <p>{data.me.description}</p>
      </g.Div>
      <ContactData>
        <p><a href={`mailto:${data.me.email}`}>{data.me.email}</a> <FontAwesome name="envelope" fixedWidth /></p>
        <p><a href={`tel:${data.me.phone}`}>{data.me.phone}</a> <FontAwesome name="phone" fixedWidth /></p>
        <p><a href={data.me.website}>{data.me.website}</a> <FontAwesome name="globe" fixedWidth /></p>
        <p><a href="https://goo.gl/maps/JRFMPfXhrMM2">{data.me.address}</a> <FontAwesome name="map-marker" fixedWidth /></p>
      </ContactData>
    </Profile>
    <hr />
    <MarkdownHtml markdown={data.me.summary} />
    <hr />
    <Experience data={data.experience} />
    <hr />
    <PrintPageBreak />
    <Skills data={data.skills} />
    <hr />
    <Education data={data.education} />
    <PrintOnly>
      <hr />
      An up-to-date version of this CV is always available at https://jonnystoten.com/cv
    </PrintOnly>
  </div>
);

export const query = graphql`
  query IndexQuery {
    me: contentfulPerson(name: {eq: "Jonny Stoten"}) {
      name
      description
      email
      phone
      website
      address
      location {
        lon
        lat
      }
      profiles {
        network
        username
        url
      }
      summary {
        childMarkdownRemark {
          html
        }
      }
    }
    experience: allContentfulEmploymentPosition(sort: {fields: [startDate], order: DESC}) {
      edges {
        node {
          company
          position
          website
          startDate
          endDate
          summary {
            childMarkdownRemark {
              html
            }
          }
          projects {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    education: allContentfulQualification {
      edges {
        node {
          level
          area
          institution
          startDate
          endDate
        }
      }
    }
    skills: contentfulSkills(contentfulid: {eq: "skills"}) {
      languages
      frameworks
      operations
      other
      notes {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
