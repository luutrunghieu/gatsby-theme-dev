import React from 'react';
import { graphql } from 'gatsby';
import DocsPage from '../components/docs-page';

export const query = graphql`
  query($pageID: String!) {
    docsPage(id: { eq: $pageID }) {
      title
      body
      updated(fromNow: true)
    }
  }
`;

const DocsPageTemplate = ({ data }) => <DocsPage page={data.docsPage} />;

export default DocsPageTemplate;
