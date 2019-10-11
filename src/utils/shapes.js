import PropTypes from 'prop-types';

export const ownerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  login: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const authorShape = PropTypes.shape({
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const stargazersShape = PropTypes.shape({
  totalCount: PropTypes.number,
});

export const commitShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  messageHeadline: PropTypes.string,
  author: authorShape,
  authoredDate: PropTypes.string,
  url: PropTypes.string,
});

export const repoShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  owner: ownerShape,
  stargazers: stargazersShape,
  defaultBranchRef: PropTypes.shape({
    target: PropTypes.shape({
      history: PropTypes.shape({
        nodes: commitShape,
      }),
    }),
  }),
});
