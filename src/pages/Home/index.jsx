import React from "react";
import Banner from "../../components/Banner";
import Blocs from "../../components/Blocs";
import styles from "./styles.module.scss";
import images from "../../assets/images/leia.jpeg";
import About from "../../components/About";
import Headband from "../../components/Headband";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Headband />
        <div className={styles.banner}>
          <Banner />
        </div>
        <>
          <div className={styles.__wrapper}>
            <section id="about">
              <About
                text="Tropézien depuis 25 ans, Christophe Papa vient de l’univers du luxe et de la mode.
                Ce sont les figures historiques; Le Corbusier, Charlotte Perriand, Florence Knoll, Eliel et Eero Saarinen, Alvar Aalto, Walter Gropius et Ludwig Mies van der Rohe; qui lui ont donné l’envie d’aller plus loin.
                La rencontre avec un acteur majeur du design italien en France lui a permis de concrétiser, il ouvre en 2016 le 1er  showroom monomarque B&B Italia en France."
                img={images}
                alt="c'est Christophe"
              />
            </section>
            <section id="products">
              <Blocs
                text="Né en 1966 de la vision entrepreneuriale de Piero Ambrogio Busnelli, le Groupe a bâti son succès sur sa capacité à représenter la culture contemporaine à travers le design, la décoration et l’architecture, et à anticiper les tendances en cherchant constamment à répondre aux évolutions des goûts et des styles de vie.
                Depuis, la célèbre marque italienne de mobilier contemporain n’a eu de cesse de créer les meubles design les plus innovants, emblématiques et intemporels, de développer une recherche et développement inégalée, un savoir-faire industriel et une qualité Made in Italy qui font de B&B Italia l'une des premières entreprises de design au monde.
                Design Holding est un hub de design unique par sa taille et son envergure internationale, intégrant des marques emblématiques telles que B&B Italia, Maxalto, Azucena, Arclinea, Flos, Louis Poulsen, Fendi Casa, Menu, by Lassen et Lumens."
                img={images}
                alt="c'est Leia"
              />
            </section>
            <section id="projects">
              <Blocs text="PROJECTS" img={images} alt="c'est Leia" />
            </section>
            <section id="contact">
              <Blocs text="CONTACT" img={images} alt="c'est Leia" />
            </section>
          </div>
        </>
      </div>
    </div>
  );
};

export default HomePage;
