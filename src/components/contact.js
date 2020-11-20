import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  withStyles,
} from '@material-ui/core/styles';
export default class Contact extends Component {
  
  render() {

    const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: '#FFF',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#FFF',
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: '#FFF',
          },
          '&:hover': {
            borderColor: '#FFF',
          },
          
        },
        '& .MuiInputLabel-formControl':{
          color:'#FFF'
        },
        '& .MuiGrid-item': {
          margin: '10px'
        }
      },
    })(TextField);

    return (
      <div className="contact section" id="Contact">
        <div className="container container-contact">
          <div className="section-head text-center">
            <h2>Contato</h2>
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
