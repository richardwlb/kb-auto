import {  
  InputBase, 
  AppBar, 
  Toolbar, 
  withStyles, 
  Theme, 
  createStyles,
  makeStyles,
  IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SearchSharp, NoteAddSharp } from '@material-ui/icons';
import ListRegisters from '../../components/ListRegisters';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerField: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      '@media (min-width: 800px)': {
        flexDirection: 'row',
      }
    },
    searchIcon: {
      cursor: 'pointer',
      marginLeft: '0.5rem',
    },
    createLink: {
      color: theme.palette.common.white,
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
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
  const [search, setSearch] = useState('');

  return(
    <div>
     <AppBar position="static"> 
       <Toolbar className={classes.containerField}>
         <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu">
          <MenuIcon />
        </IconButton>

        <div className={classes.searchContainer} >
          <BootsrapInput value={search} onChange={(e) => setSearch(e.target.value)} />
          {/* <SearchSharp 
            className={classes.searchIcon}
            onClick={() => alert('procurar')} 
          /> */}
        </div>

        <div className="classes actionsContainer">
          <Link className={classes.createLink} to="/new">
            <NoteAddSharp/>
          </Link>
        </div>
          
       </Toolbar>
      </AppBar>
      <ListRegisters search={search} />
    </div>
  );
}