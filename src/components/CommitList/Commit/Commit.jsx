import React from 'react';
import { commitShape } from 'utils/shapes';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';

import styles from './Commit.module.scss';

const Commit = ({
  commit: {
    messageHeadline,
    author,
    authoredDate,
    url,
  },
}) => (
  // TODO: handle onClick details
  <ListItem button onClick={() => {}}>
    <ListItemAvatar>
      <Avatar>
        <img
          src={author.avatarUrl}
          alt={author.name}
          className={styles.avatar}
        />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={messageHeadline}
      // TODO: use local timezone
      secondary={`${authoredDate} by ${author.name}`}
    />
    <ListItemSecondaryAction>
      <IconButton onClick={() => window.open(url)}>
        <CodeIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

Commit.propTypes = {
  commit: commitShape.isRequired,
};

export default React.memo(Commit);
