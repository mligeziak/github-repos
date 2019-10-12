import React from 'react';
import { repoShape } from 'utils/shapes';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import Readme from './Readme';

import styles from './RepositoryDetails.module.scss';

const RepositoryDetails = ({
  repository: {
    owner,
    name,
    description,
    stargazers,
    readme,
    defaultBranch,
  },
}) => (
  <Card className={styles.card}>
    <CardHeader
      avatar={(
        <Avatar>
          <img
            src={owner.avatarUrl}
            alt={owner.login}
            className={styles.avatar}
          />
        </Avatar>
      )}
      action={(
        <div className={styles.starsCounter}>
          <Typography variant="caption" classes={{ root: styles.starsCounterText }}>
            {stargazers.totalCount}
          </Typography>
          <StarIcon />
        </div>
      )}
      title={name}
      subheader={owner.login}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {'Description: '}
        {description || 'No description'}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {`Default branch: ${defaultBranch}`}
      </Typography>
    </CardContent>
    <Readme readme={readme} />
  </Card>
);

RepositoryDetails.propTypes = {
  repository: repoShape.isRequired,
};

export default React.memo(RepositoryDetails);
