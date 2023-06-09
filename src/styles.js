import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#3e464d',
  },
  companyName: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  mainContent: {
    marginTop: theme.spacing(10),
    textAlign: 'center',
  },
  circleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  circle: {
    width: '240px',
    height: '240px',
    backgroundColor: '#1d2126',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  },
  newTripButton: {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    padding: '64px',
    borderRadius: '50%',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
}));

export default useStyles;
