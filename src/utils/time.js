import moment from 'moment';
import config from 'config';

export const fromUtcToLocal = (utc) => {
  const momentUtc = moment.utc(utc);
  const momentLocal = momentUtc.local();

  return momentLocal.format(config.defaultDataTimeFormat);
};
