import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import _debounce from 'lodash/debounce';
import config from 'config';

class SearchField extends PureComponent {
  debouncedChange = _debounce((value) => {
    const { onChange } = this.props;

    onChange(value);
  }, config.debounceTime);

  constructor(props) {
    super(props);

    this.state = {
      phrase: props.initialValue,
    };
  }

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      phrase: value,
    });

    this.debouncedChange(value);
  };

  render() {
    const { id, label, className } = this.props;
    const { phrase } = this.state;

    return (
      <TextField
        id={id}
        fullWidth
        label={label}
        value={phrase}
        variant="outlined"
        className={className}
        onChange={this.onChange}
        autoComplete="off"
      />
    );
  }
}

SearchField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  className: PropTypes.string,
};

SearchField.defaultProps = {
  initialValue: '',
  className: null,
};

export default SearchField;
