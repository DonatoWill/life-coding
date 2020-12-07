import React, { Component } from "react";

export default class footer extends Component {

  componentDidMount() {
    (() => {
      if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
      }
      
      const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
      };

      const refuseCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
      };
      
      const btnCookies = document.querySelector(".btn-cookies");
      const btnRefuseCookies = document.querySelector(".btn-cookies-refuse");
      
      btnRefuseCookies.addEventListener('click', refuseCookies)
      btnCookies.addEventListener('click', acceptCookies);
    })()
  }

  render() {
    return (
      <div className="site-footer" id="footer">
        <div className="container">
          <span>Donato William - {this.props.siteName} - Copyright © 2020 </span>
        </div>
        <div className="box-cookies hide">
          <p className="msg-cookies">Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
          <button className="btn-cookies">Aceitar!</button>
          <button className="btn-cookies-refuse">Recusar</button>
        </div>
      </div>
    );
  }
}
