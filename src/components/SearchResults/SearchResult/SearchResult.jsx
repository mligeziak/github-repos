import React from 'react';
import { useHistory } from 'react-router-dom';
import { repoShape } from 'utils/shapes';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';

import styles from './SearchResult.module.scss';

const SearchResult = ({ result: { name, owner, stargazers } }) => {
  const history = useHistory();

  const onClick = () => history.push(`/repository/${owner.login}/${name}`);

  return (
    <ListItem
      button
      onClick={onClick}
    >
      <ListItemAvatar>
        <Avatar>
          <img
            src={owner.avatarUrl}
            alt={owner.login}
            className={styles.avatar}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={owner.login} />
      <ListItemSecondaryAction className={styles.starsCounter}>
        <Typography variant="caption" classes={{ root: styles.starsCounterText }}>
          {stargazers.totalCount}
        </Typography>
        <StarIcon />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

SearchResult.propTypes = {
  result: repoShape.isRequired,
};

export default React.memo(SearchResult);
