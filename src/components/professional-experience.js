import React, { Component } from "react";
import Img from "gatsby-image";

export default class ProfessionalExperience extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="work" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Experiência Profissional</h2>
          </div>
          <ul class="timeline">
            <li class="event">
              <span class="double-year-experience">2019 - 2020</span>
              <h3>Bionexo</h3>
              <p>Implantação de novos módulos e manutenção de Sistema para Aquisição e
                  Gestão de Materiais de Alto Custo (OPME) para hospitais, utilizando
                  metodologias ágeis como scrum e kanban, participando dos processos de
                  análise, desenvolvimento e deploy em produção
              </p>
              <ul class="technologies">
                <li>Java</li>
                <li>Spring</li>
                <li>Oracle</li>
                <li>Redis</li>
                <li>Docker</li>
              </ul>
              <ul class="technologies">
                <li>AWS</li>
                <li>Git</li>
                <li>Linux</li>
                <li>JS</li>
                <li>Web</li>
              </ul>
            </li>
            <li class="event" data-date="2005">
              <span class="double-year-experience">2018 - 2019</span>
              <h3>T2S - Tecnologia, Soluções e Sistemas</h3>
              <p>Desenvolvimento de soluções para o Setor Portuário, criando sistemas utilizando diferentes tipos de linguagens e metodologias no principais terminais brasileiros.</p> 
              <p>- Automação de TDR (terminal departure report), sistema que automatiza o preenchimento do documento, de acordo com os dados do terminal e o modelo de relatório predefinido pelo armador. Trazendo mais produtividade para o planner.</p>
              <p>- Desenvolvimento de sistema ADE02 , aplicação web que auxilia os recintos alfandegados a atender ao Ato Declaratório Executivo COANA/COTEC 02/2003, da Receita Federal do Brasil (RFB).</p>
              <p>- Desenvolvimento Portal Intitucional e de Serviços Tecon Suape.</p> 
              <ul class="technologies">
                <li>Java</li>
                <li>Spring</li>
                <li>Oracle</li>
                <li>Postgres</li>
                <li>C#</li>
              </ul>
              <ul class="technologies">
                <li>Angular</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Groovy</li>
                <li>JS</li>
              </ul>   
            </li>
            <li class="event" id="date" data-date="2009">
              <span class="double-year-experience">2017  - 2018</span>
              <h3>Agência de Inovação INOVA Paula Souza</h3>
              <p>Desenvolvimento de sistema Java Web utilizando HTML, CSS, JavaScript, AngularJS, JQuery, Bootstrap 3, VisualSVN Server para o controle de versionamento, back-end utilizando Java, realizando requisições com o Banco de Dados (PostegreSQL), controle de acesso e sessão e sistema de mailing em conjunto com a ferramenta Sendgrid.
</p>
              <ul class="technologies">
                <li>Java</li>
                <li>Spring</li>
                <li>Oracle</li>
                <li>Git</li>
                <li>Web</li>
              </ul>
              <ul class="technologies">
                <li>AngularJS</li>
                <li>Bootstrap</li>                
                <li>JS</li>
              </ul>      
            </li> 
          </ul>
        </div>
      </div>
    );
  }
}
