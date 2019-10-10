import PropTypes from 'prop-types';

export const ownerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  login: PropTypes.string,
  avatarUrl: PropTypes.string,
});

export const resultShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  owner: ownerShape.isRequired,
  stargazers: PropTypes.shape({
    totalCount: PropTypes.number,
  }),
});
