import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import "../../css/bootstrap.min.css";

const styles = {
  card: {
    maxWidth: "auto",
  },
  media: {
    height: 140,
  },
};

function Mainpage(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>

        <CardContent>
        <Typography gutterBottom variant="h4" component="h1">
            Species sampling ...
            </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Lizards
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}//

Mainpage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mainpage);