import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ReactMarkdown from 'react-markdown';

import styles from './Readme.module.scss';

const Readme = ({ readme }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions disableSpacing className={styles.root}>
        <IconButton
          classes={
            {
              label: cx(
                styles.expand,
                expanded && styles.expandOpen,
              ),
            }
          }
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1" component="div">
            {readme ? (
              <ReactMarkdown source={readme} />
            ) : 'No readme'}
          </Typography>
        </CardContent>
      </Collapse>
    </>
  );
};

Readme.propTypes = {
  readme: PropTypes.string,
};

Readme.defaultProps = {
  readme: null,
};

export default React.memo(Readme);
