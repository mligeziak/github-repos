import React from 'react';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ReactMarkdown from 'react-markdown';

const CommitDetails = ({ messageBody, expanded, changedFiles }) => (
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography variant="body1" component="p">
        {`Changed files: ${changedFiles}`}
      </Typography>
      <Typography variant="body1" component="div">
        {messageBody ? (
          <ReactMarkdown source={messageBody} />
        ) : 'No message body'}
      </Typography>
    </CardContent>
  </Collapse>
);

CommitDetails.propTypes = {
  messageBody: PropTypes.string,
  changedFiles: PropTypes.number,
  expanded: PropTypes.bool,
};

CommitDetails.defaultProps = {
  messageBody: null,
  changedFiles: 0,
  expanded: false,
};

export default React.memo(CommitDetails);
