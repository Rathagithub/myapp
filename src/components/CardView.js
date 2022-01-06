import React from 'react';
import {
 Card,
 Button,
 Typography,
 CardActions,
 CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 root: {
  width: 275,
  margin: 10,
 },
 bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
 },
 title: {
  fontSize: 14,
 },
 pos: {
  marginBottom: 12,
 },
});

const CardView = ({ data }) => {
 const classes = useStyles();

 return (
  <>
   <div className='box'>
    {data.map(d => (
     <Card className={classes.root} variant="outlined" >
      <CardContent>
       <Typography className={classes.title} color="textSecondary" gutterBottom>
        Name
       </Typography>
       <Typography variant="h5" component="h2">
        {d.id}. {d.lastName} {d.firstName}
       </Typography>
       <Typography className={classes.pos} color="textSecondary">
        age {d.age}
       </Typography>
       <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    ))}
   </div>
  </>
 );
}

export default CardView;
