import PropTypes from 'prop-types';

export const ownerShape = PropTypes.shape({
  id: PropTypes.string,
  login: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const authorShape = PropTypes.shape({
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const commitShape = PropTypes.shape({
  id: PropTypes.string,
  messageHeadline: PropTypes.string,
  author: authorShape,
  authoredDate: PropTypes.string,
  url: PropTypes.string,
});

export const repoShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  owner: ownerShape,
  starsCount: PropTypes.number,
  readme: PropTypes.string,
  commits: PropTypes.arrayOf(commitShape),
  endCursor: PropTypes.string,
  hasNextPage: PropTypes.bool,
});
