import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import '../css/lp.css';

export default class LandPage extends Component {

    render() {
        const { data } = this.props;
        return (

            <div className="lp-banner">
            <div className="container container-lp">
                <div className="lp-banner-details">
                <div className="title-content">
                    <div>
                        <h1><span className="texto-destaque">Seu produto</span> ao alcance de todos!</h1>
                    </div>
                    <p className="lp-sub-title">Criamos Landing Pages para <span className="texto-destaque">aumentar suas vendas</span></p>              
                    <div className="lp-cta">
                        <div>
                        <Link to="/whatsapp">
                            <span>Pedir orçamento</span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foguete">
                <Img
                    fluid={data.foguete.childImageSharp.fluid}
                    objectPosition="50% 50%"
                    />
                </div>
                <div class="first-content">
                <h1><span className="texto-destaque">Multiplique</span> suas vendas através da internet</h1>
                <p className="lp-sub-title-2">Se você possui um dos perfis abaixo e ainda não possui um site, provavelmente está perdendo dinheiro</p>
                <div class="lp-list-cards">
                    <div class="card lp-perfil-card">
                        <div class="card-body">
                            <h3 class="card-title">Prestador de Serviço</h3>
                        </div>
                    </div>
                    <div class="card lp-perfil-card">
                        <div class="card-body">
                            <h3 class="card-title">Empreendedor</h3>
                        </div>
                    </div>
                    <div class="card lp-perfil-card">
                        <div class="card-body">
                            <h3 class="card-title">Criador de Conteúdo</h3>
                        </div>
                    </div>
                </div>
                </div>

                <div class="service-content">
                <h1 class="lp-service-title">O QUE OFERECEMOS?</h1>
                <div class="lp-list-cards">
                    <div class="card lp-service-card">
                        <div class="card-body">
                            <h5 class="card-title">Criação de Site</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card lp-service-card">
                        <div class="card-body">
                            <h5 class="card-title">Páginas Customizadas</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card lp-service-card">
                        <div class="card-body">
                            <h5 class="card-title">Lançamentos</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="lp-cta-big">
                    <div>
                            <div>
                            <Link to="/whatsapp">
                                <span>QUERO VENDER MAIS</span>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
            
          </div>
      );
    }
}

export const pageQuery = graphql`
query LandPageQuery {
  mainBanner: file(relativePath: { eq: "banner-principal.jpg" }) {
    childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
    }
  }
  foguete: file(relativePath: { eq: "foguete.png" }) {
    childImageSharp {
        fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
    }
  }
}
`;