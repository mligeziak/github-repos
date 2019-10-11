import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import _get from 'lodash/get';

import CircularProgress from '@material-ui/core/CircularProgress';
import CommitList from 'components/CommitList';

import styles from './Repository.module.scss';
import GetRepository from './Repository.graphql';

const Repository = () => {
  const { owner, name } = useParams();

  const { data, loading } = useQuery(GetRepository, {
    variables: {
      owner,
      name,
    },
  });

  let commits = _get(data, 'repository.commitComments.nodes', []);

  if (commits.length) {
    commits = commits.map((commit) => commit.commit);
  }

  return (
    <div className={styles.root}>
      {loading ? <CircularProgress className={styles.loading} /> : (
        <CommitList commits={commits} />
      )}
    </div>
  );
};

export default Repository;
