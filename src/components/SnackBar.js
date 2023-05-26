import { Alert, Snackbar } from '@mui/material';
import { useMatchContext } from '../context/MatchContext';

function SnackBar() {
  const {
    openSnack,
    openSnackRemove,
    handleCloseSnackRemove,
    handleCloseSnack,
  } = useMatchContext();
  return (
    <div>
      <Snackbar
        open={openSnack}
        autoHideDuration={1000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: '100%' }}
        >
          Match is add to favorite!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSnackRemove}
        autoHideDuration={1000}
        onClose={handleCloseSnackRemove}
      >
        <Alert severity="error">Match removed from favorites!</Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
