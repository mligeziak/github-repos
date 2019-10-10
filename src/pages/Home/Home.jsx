import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';
import _get from 'lodash/get';

import SearchField from 'components/SearchField';
import SearchResults from 'components/SearchResults';
import GithubLogo from 'assets/github-logo.jpg';

import styles from './Home.module.scss';
import GetRepos from './Home.graphql';

const Home = () => {
  const [phrase, setPhrase] = useState('');

  const { data, loading } = useQuery(GetRepos, {
    variables: {
      phrase,
    },
  });

  const onPhraseChange = (value) => {
    setPhrase(value);
  };

  const nodes = _get(data, 'search.nodes', []);
  const matchedResults = _get(data, 'search.repositoryCount', 0);

  return (
    <div className={styles.root}>
      <img
        src={GithubLogo}
        alt="Github"
        className={cx(
          styles.logo,
          nodes.length > 0 && styles.small,
        )}
      />
      <SearchField
        id="search-field"
        label="Search repository"
        className={styles.searchField}
        initialValue={phrase}
        onChange={onPhraseChange}
      />
      <SearchResults
        results={nodes}
        loading={loading}
        className={styles.searchResults}
        matchedResults={matchedResults}
      />
    </div>
  );
};

export default Home;
