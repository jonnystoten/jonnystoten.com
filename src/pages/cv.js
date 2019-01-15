import React from "react";
import g from "glamorous";
import FontAwesome from "react-fontawesome";

import { Experience } from "../components/experience";
import { MarkdownHtml } from "../components/markdown-html";
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { mediaQueries } from "../utils/media-queries";
import { PrintOnly } from "../utils/print-only";
import { PrintPageBreak } from "../utils/print-page-break";

const Profile = g.div({
  [mediaQueries.supportsGrid]: {
    display: "grid",
    gridTemplateAreas: `
      "name contact"
      "social contact"
    `,
    [mediaQueries.phone]: {
      gridTemplateAreas: `
        "name"
        "contact"
        "social"
      `,
    },
  },
});

const Name = g.div({
  [mediaQueries.supportsGrid]: {
    gridArea: "name",
  },
});

const ContactData = g.div({
  textAlign: "right",
  [mediaQueries.supportsGrid]: {
    gridArea: "contact",
  },
  // [mediaQueries.phone]: {
  //   textAlign: "initial"
  // }
});

const Social = g.div({
  [mediaQueries.print]: {
    display: "none",
  },
  [mediaQueries.supportsGrid]: {
    gridArea: "social",
  },
  paddingBottom: "1rem",
});

const SocialLink = g.a({
  fontSize: "2rem",
  padding: "0 1rem",
});

export default ({ data }) => (
  <div>
    <Profile>
      <Name>
        <h1>{data.me.name}</h1>
        <p>{data.me.description}</p>
      </Name>
      <ContactData>
        <p>
          <a href={`mailto:${data.me.email}`}>{data.me.email}</a> <FontAwesome name="envelope" fixedWidth />
        </p>
        <p>
          <a href={`tel:${data.me.phone}`}>{data.me.phone}</a> <FontAwesome name="phone" fixedWidth />
        </p>
        <p>
          <a href={data.me.website}>{data.me.website}</a> <FontAwesome name="globe" fixedWidth />
        </p>
        <p>
          <a href="https://goo.gl/maps/LN8brDeE1Rp">{data.me.address}</a> <FontAwesome name="map-marker" fixedWidth />
        </p>
      </ContactData>
      <Social>
        {data.me.profiles.map(p => (
          <SocialLink href={p.url} title={p.network}>
            <FontAwesome name={p.icon} />
          </SocialLink>
        ))}
      </Social>
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
    me: contentfulPerson(name: { eq: "Jonny Stoten" }) {
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
        icon
      }
      summary {
        childMarkdownRemark {
          html
        }
      }
    }
    experience: allContentfulEmploymentPosition(sort: { fields: [startDate], order: DESC }) {
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
    education: allContentfulQualification(sort: { fields: [startDate], order: DESC }) {
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
    skills: contentfulSkills(contentfulid: { eq: "skills" }) {
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
`;
