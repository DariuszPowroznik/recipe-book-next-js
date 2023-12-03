import { Alert, AlertColor, Snackbar as MUISnackbar } from '@mui/material';

interface SnackbarProps {
  children: string;
  type?: AlertColor;
  open: boolean;
  handleClose: () => void;
}

export function Snackbar({ children, type, open, handleClose }: SnackbarProps) {
  return (
    <MUISnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {children}
      </Alert>
    </MUISnackbar>
  );
}
