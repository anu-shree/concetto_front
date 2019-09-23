import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, MuiThemeProvider, createMuiTheme }
  from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const inputTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#525188',
    },
  },
  typography: { useNextVariants: true },
});

const styles = (theme) => ({
  margin: {
    width: '100%',
  },
});

const TextFields = ({
  classes, onChange, value, placeholder, label, id, variant, ...restProps
}) => (
  <MuiThemeProvider theme={inputTheme}>
    <TextField
      id={id}
      value={value}
      label={label}
      placeholder={placeholder}
      className={classes.margin}
      variant={variant}
      onChange={onChange}
      {...restProps}
    />
  </MuiThemeProvider>
);

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextFields);
