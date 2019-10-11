import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';
import _set from 'lodash/set';

import CircularProgress from '@material-ui/core/CircularProgress';
import CommitList from 'components/CommitList';

import styles from './Repository.module.scss';
import GetRepository from './Repository.graphql';

const getCommits = (data) => _get(data, 'repository.defaultBranchRef.target.history.nodes', []);
const setCommits = (data, value) => _set(data, 'repository.defaultBranchRef.target.history.nodes', value);
const getEndCursor = (data) => _get(data, 'repository.defaultBranchRef.target.history.pageInfo.endCursor', null);
const gethasNextPage = (data) => _get(data, 'repository.defaultBranchRef.target.history.pageInfo.hasNextPage', false);

const Repository = () => {
  const { owner, name } = useParams();

  const { data, loading, fetchMore } = useQuery(GetRepository, {
    variables: {
      cursor: null,
      owner,
      name,
    },
  });

  const commits = getCommits(data);
  const endCursor = getEndCursor(data);
  const hasNextPage = gethasNextPage(data);

  const loadMore = () => fetchMore({
    variables: {
      cursor: endCursor,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;

      const newCommits = getCommits(fetchMoreResult);
      let result = { ...fetchMoreResult };
      result = setCommits(result, [...commits, ...newCommits]);

      return result;
    },
  });

  return (
    <div className={styles.root}>
      {loading ? (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <CommitList
          commits={commits}
          loadMore={loadMore}
          hasMore={hasNextPage}
        />
      )}
    </div>
  );
};

export default Repository;
