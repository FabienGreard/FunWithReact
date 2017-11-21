import { createMuiTheme } from 'material-ui/styles';
import { red, purple, green } from 'material-ui/colors';
import 'typeface-roboto';

export default function theme() {
  return createMuiTheme({
    palette: {
      primary: purple,
      secondary: green,
      error: red,
    },
  });
}
