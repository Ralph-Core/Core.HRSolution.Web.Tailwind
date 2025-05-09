import { SolidSnackbar } from '@/_metronic/components/snackbar';
import { SnackbarProvider as CustomSnackbarProvider } from 'notistack';
const SnackbarProvider = ({
  children
}) => {
  return <CustomSnackbarProvider autoHideDuration={2000} maxSnack={3} anchorOrigin={{
    vertical: 'top',
    horizontal: 'right'
  }} Components={{
    solid: SolidSnackbar
  }}>
      {children}
    </CustomSnackbarProvider>;
};
export { SnackbarProvider };