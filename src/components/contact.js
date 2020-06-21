import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TextareaAutosize } from '@material-ui/core';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
export default class Contact extends Component {
  
  render() {

    const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: '#ef5826',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#ef5826',
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#ef5826',
          },
          '&:hover': {
            borderColor: '#ef5826',
          },
        },
      },
    })(TextField);
    
    const useStyles = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
    }));

    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contato</h2>
          </div>
          <form
            action={`https://formspree.io/${this.props.data}`}
            name="contact"
            method="POST"
            data-netlify="true"
          >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <CssTextField
                required
                id="contact-name"
                name="Nome"
                label="Nome"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
            <CssTextField
                required
                id="contact-name"
                name="email"
                type="email"
                label="Email"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={8}>

              <CssTextField
                id="standard-multiline-static"
                label="Mensagem"
                multiline
                name="message"
                rows={4}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <button type="submit">Send</button>
            </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}
