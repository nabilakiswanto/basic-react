import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {/* Add other meta tags here */}
    </Helmet>
  );
};

export default Metadata;
