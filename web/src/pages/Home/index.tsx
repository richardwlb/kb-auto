import { 
  Button, 
  InputBase, 
  AppBar, 
  Toolbar, 
  withStyles, 
  Theme, 
  createStyles,
  makeStyles,
  IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListRegisters from '../../components/ListRegisters';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerField: {
      // borderStyle: 'solid',
      // borderColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      // flexWrap: 'nowrap',
      padding: '10px',
      '@media (min-width: 800px)': {
        flexDirection: 'row',
      }
    },
    searchButton: {
      // minWidth: '90px',
      margin: '5px',
      width: '90vw',
      '@media (min-width: 800px)': {
        maxWidth: '250px'
      }
    }
  }),
);

const BootsrapInput = withStyles((theme: Theme) => 
  createStyles({
    input: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      padding: '10px 5px',
      margin: '5px',
      width: '88vw',
      '@media (min-width: 800px)': {
        width: '700px',
      }
    }
  }),
)(InputBase);

export default function Home(){
  const classes = useStyles();

  return(
    <div >
     <AppBar position="static"> 
       <Toolbar className={classes.containerField}>
         <IconButton 
          edge="start" 
          // className={classes.menuButton} 
          color="inherit" 
          aria-label="menu">
          <MenuIcon />
        </IconButton>
        <BootsrapInput />
        <Button 
          className={classes.searchButton}
          variant="contained" >
          Pesquisar
        </Button>
       </Toolbar>
      </AppBar>
      <ListRegisters />
    </div>
  );
}