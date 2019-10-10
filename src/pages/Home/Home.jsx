import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import SearchField from 'components/SearchField';
import GithubLogo from 'assets/github-logo.jpg';

import styles from './Home.module.scss';
import GetRates from './Home.graphql';

const Home = () => {
  const [phrase, setPhrase] = useState('');

  const { data, loading } = useQuery(GetRates, {
    variables: {
      phrase,
    },
  });

  const onPhraseChange = (value) => {
    setPhrase(value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.root}>
      <img
        src={GithubLogo}
        alt="Github"
        className={styles.logo}
      />
      <SearchField
        id="search-field"
        label="Search repository"
        className={styles.searchField}
        initialValue={phrase}
        onChange={onPhraseChange}
      />
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Home;
