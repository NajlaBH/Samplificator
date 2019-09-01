import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
      flexGrow: 2,
    },
    paper: {
        //padding: theme.spacing.unit * 2,
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //fontSize: 'calc(10px + 2vmin)',
        fontSize: '0.75em',
        fontStyle: 'italic',
        //color: '#BCA590',
        color: 'white',
        //marge: theme.spacing.unit * 2,
        backgroundColor: '#487F7F',
        minHeight: '7vh',
        display: 'flex',
        padding: '0.01%',
    },
  });
  
class AppFooter extends React.Component {
    render() {
        const { classes } = this.props;

        // Date and Time
        const websiteDate = new Date()
        // Current year
        let nowDateWs = websiteDate.getFullYear()
        // Date of the creation of the site 
        let createdAt = "March - 2019"

        return(
            // <p> Footer form shared component. ;à</p>
            <footer className="App-footer">
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            Created at - {createdAt} 
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <p>  Contact[{this.props.developerName}] 
                            * Version{this.props.appVersion}-{this.props.appTags} *
                              BHNtools©CopyRight 2019-{nowDateWs}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            Updated at - {this.props.updatedAt}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            </footer>
        )
    }
    
}

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(AppFooter);