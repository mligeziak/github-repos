import React, { useState } from 'react';

import { commitShape } from 'utils/shapes';
import { fromUtcToLocal } from 'utils/time';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';

import CommitDetails from './CommitDetails';

import styles from './Commit.module.scss';

const Commit = ({
  commit: {
    messageHeadline,
    messageBody,
    author,
    authoredDate,
    url,
    changedFiles,
  },
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ListItem button onClick={handleExpandClick}>
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
          secondary={`${fromUtcToLocal(authoredDate)} by ${author.name}`}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => window.open(url)}>
            <CodeIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <CommitDetails
        changedFiles={changedFiles}
        messageBody={messageBody}
        expanded={expanded}
      />
    </>
  );
};

Commit.propTypes = {
  commit: commitShape.isRequired,
};

export default React.memo(Commit);
