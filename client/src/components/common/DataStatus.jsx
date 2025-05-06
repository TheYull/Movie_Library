import React from 'react';

const DataStatus = ({ loading, error, data, children }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Data is not available ☹️ </p>;

  return children;
};

export default DataStatus;