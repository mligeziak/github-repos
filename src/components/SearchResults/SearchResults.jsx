import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import SearchResult from './SearchResult';

import styles from './SearchResults.module.scss';
import { resultShape } from './SearchResults.shapes';

const SearchResults = ({
  results,
  loading,
  matchedResults,
  className,
}) => (
  <div className={cx(styles.root, className)}>
    {loading ? <CircularProgress className={styles.loading} /> : (
      <>
        <Typography variant="subtitle1">
          {`All matched results: ${matchedResults}`}
        </Typography>
        <Card className={styles.card}>
          <List className={styles.list}>
            {results.map((result) => (
              <SearchResult
                key={result.id}
                result={result}
              />
            ))}
          </List>
        </Card>
      </>
    )}
  </div>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(resultShape).isRequired,
  matchedResults: PropTypes.number,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

SearchResults.defaultProps = {
  matchedResults: 0,
  loading: false,
  className: null,
};

export default React.memo(SearchResults);
