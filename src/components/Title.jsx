import React from 'react';
import ContentLoader from 'react-content-loader';

const Title = ({ loading }) => {
  if (loading) {
    return (
      <ContentLoader
        speed={1}
        width={300}
        height={50}
        viewBox="0 0 300 50"
        backgroundColor="#f4f4f4"
        foregroundColor="#ecebeb">
        <rect x="1" y="1" rx="10" ry="10" width="300" height="50" />
      </ContentLoader>
    );
  }

  return <input placeholder="Untitled" className="title-input" type="text" value="Покупки" />;
};

export default Title;
