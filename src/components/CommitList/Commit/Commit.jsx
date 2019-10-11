import React from 'react';
import { commitShape } from 'utils/shapes';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import styles from './Commit.module.scss';

const Commit = ({ commit: { messageHeadline, author, authoredDate } }) => (
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
      secondary={`${authoredDate} by ${author.name}`}
    />
  </ListItem>
);

Commit.propTypes = {
  commit: commitShape.isRequired,
};

export default React.memo(Commit);
