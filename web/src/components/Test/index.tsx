import {
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';
import { isJSDocReturnTag } from 'typescript';


const response = [{
  "page": 1,
  "totalPages": 5,
  "data": [{
    "title": "Movie 1",
    "rating": 4.7
  }, {
    "title": "Movie 2",
    "rating": 7.8
  }]
}, {
  "page": 2,
  "totalPages": 5,
  "data": [{
    "title": "Movie 3",
    "rating": 5.1
  }, {
    "title": "Movie 4",
    "rating": 2.4
  }]
}]

const moviesRating = response.map((data) => data.data);
const rating = moviesRating.flat();

let maxRating = 0;
let total = 0;

for(let i=0; i<rating.length; i++) {
  const currentRating = rating[i].rating;
  total += currentRating
  maxRating = currentRating > maxRating ? currentRating : maxRating;
}

const average = total/rating.length;

console.log('average: ', average);
console.log('maxRating: ', maxRating);




const useStyles = makeStyles((theme) => ({
  redBox: {
    width: '640px',
    height: '732px',
    background: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    width: '200px',
    height: '200px',
    background: 'blue',
  }

  // section: {
  //   borderStyle: 'solid',
  //   borderColor: '#263238',

  //   height: '80vh',
  //   width: '60vw',
  //   padding: '10px',
  //   display: 'flex',
  //   margin: 'auto',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end'
  // },
  // button: {
  //   // position: 'relative',
  //   // left: '10px',
  //   // margin: '10px'
  // }
}));

export default function Test() {
  const classes = useStyles();

  return(
    // <section className={classes.section}>
    //   <Button 
    //     size="small"
    //     className={classes.button}
    //     // color="primary"
    //   >
    //     Botão
    //   </Button>
    //   <Button 
    //     className={classes.button}
    //     variant="contained"
    //     color="primary"
    //   >
    //     Botão
    //   </Button>
    // </section>
    <div className={classes.redBox}>
      <div className={classes.blueBox} ></div>
    </div>
  )
}