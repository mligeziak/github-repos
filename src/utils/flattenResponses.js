import _get from 'lodash/get';

export const flattenRepository = (data) => ({
  ..._get(data, 'repository', {}),
  starsCount: _get(data, 'repository.stargazers.totalCount', 0),
  readme: _get(data, 'repository.readme.text', null),
  commits: _get(data, 'repository.defaultBranchRef.target.history.nodes', []),
  endCursor: _get(data, 'repository.defaultBranchRef.target.history.pageInfo.endCursor', null),
  hasNextPage: _get(data, 'repository.defaultBranchRef.target.history.pageInfo.hasNextPage', false),
});
