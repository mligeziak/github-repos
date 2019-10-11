import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { commitShape } from 'utils/shapes';

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';

import Commit from './Commit';

import styles from './CommitList.module.scss';

const CommitList = ({
  commits,
  className,
}) => (
  <div className={cx(styles.root, className)}>
    <Card className={styles.card}>
      <List className={styles.list}>
        {commits.map((commit) => (
          <Commit
            key={commit.id}
            commit={commit}
          />
        ))}
      </List>
    </Card>
  </div>
);

CommitList.propTypes = {
  commits: PropTypes.arrayOf(commitShape).isRequired,
  className: PropTypes.string,
};

CommitList.defaultProps = {
  className: null,
};

export default React.memo(CommitList);
