import React from "react";
import g from "glamorous";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faGlobe, faMapMarker } from '@fortawesome/fontawesome-free-solid'

import { Experience } from "../components/experience"
import { MarkdownHtml } from "../components/markdown-html"
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { mediaQueries } from "../utils/media-queries";

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
        <p><a href={`mailto:${data.me.email}`}>{data.me.email}</a> <FontAwesomeIcon icon={faEnvelope} /></p>
        <p><a href={`tel:${data.me.phone}`}>{data.me.phone}</a> <FontAwesomeIcon icon={faPhone} /></p>
        <p><a href={data.me.website}>{data.me.website}</a> <FontAwesomeIcon icon={faGlobe} /></p>
        <p><a href="https://goo.gl/maps/JRFMPfXhrMM2">{data.me.address}</a> <FontAwesomeIcon icon={faMapMarker} /></p>
      </ContactData>
    </Profile>
    <hr />
    <MarkdownHtml markdown={data.me.summary} />
    <hr />
    <Experience data={data.experience} />
    <hr />
    <Skills data={data.skills} />
    <hr />
    <Education data={data.education} />
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
