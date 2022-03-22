import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome Bamako Apple suply",
  description: "We sell the best products that is not easy find in Mali",
  keywords: "electronics, buy electronics, cheap electroincs",
};

export default Meta;
