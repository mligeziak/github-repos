import React from 'react';
import Button from '@material-ui/core/Button';
import { useQuery } from '@apollo/react-hooks';

import GetRates from './Home.graphql';

const Home = () => {
  const { loading, data } = useQuery(GetRates);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button variant="contained" color="primary">
        Test
        {console.log(data)}
      </Button>
    </div>
  );
};

export default Home;
