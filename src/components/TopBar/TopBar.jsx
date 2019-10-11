import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TopBar = ({ title, goBackTo }) => {
  const history = useHistory();

  const goBack = () => history.replace(goBackTo);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={goBack}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  goBackTo: PropTypes.string.isRequired,
};

export default React.memo(TopBar);
