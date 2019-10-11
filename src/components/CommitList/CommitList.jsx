import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import { commitShape } from 'utils/shapes';

import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';

import Commit from './Commit';

import styles from './CommitList.module.scss';

const CommitList = ({
  commits,
  hasMore,
  loadMore,
  className,
}) => (
  <div className={cx(styles.root, className)}>
    <Card className={styles.card}>
      <List className={styles.list}>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<LinearProgress key={0} className={styles.loading} />}
        >
          {commits.map((commit) => (
            <Commit
              key={commit.id}
              commit={commit}
            />
          ))}
        </InfiniteScroll>
      </List>
    </Card>
  </div>
);

CommitList.propTypes = {
  commits: PropTypes.arrayOf(commitShape).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
  className: PropTypes.string,
};

CommitList.defaultProps = {
  className: null,
  hasMore: false,
};

export default React.memo(CommitList);
