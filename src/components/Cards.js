import React, { useState } from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";
import Bubbels from "./Effects/Bubbels";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import MySwiper from "../components/Global/MySwiper";
import { graphql, useStaticQuery } from "gatsby";
import { Parser } from "../utils/utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Cards = () => {
  const { ueberschrift, leistungen } = useStaticQuery(graphql`
    {
      strapiLeistungen {
        ueberschrift: Ueberschrift
        leistungen: Leistungen {
          hintergrund: Hintergrund {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          text: Text
          textVorschau: TextVorschau
          ueberschrift: Ueberschrift
          untertitel: Untertitel
          icon: Icon {
            iconID
          }
        }
      }
    }
  `).strapiLeistungen;

  const [modals, setModals] = useState(
    new Array(leistungen.length).fill(false)
  );

  const openModal = (key) => {
    document.body.style.overflow = "hidden";
    const updatedModals = [...modals];
    updatedModals[key] = true;
    setModals(updatedModals);
  };

  const closeModal = (key) => {
    document.body.style.overflow = "unset";
    const updatedModals = [...modals];
    updatedModals[key] = false;
    setModals(updatedModals);
  };

  const createCardsJSXArray = (leistungen) => {
    return leistungen.map((leistung, id) => {
      const { textVorschau, ueberschrift, icon } = leistung;
      return (
        <Card
          text={textVorschau}
          title={ueberschrift}
          icon={icon.iconID}
          key={id}
          onClick={() => openModal(id)}
        />
      );
    });
  };

  const calculateRows = (numObjects) => {
    // Jede Reihe hat maximal 3 Objekte
    const objectsPerRow = 3;
    // Anzahl der vollständigen Reihen
    const fullRows = Math.floor(numObjects / objectsPerRow);
    // Anzahl der verbleibenden Objekte auf der letzten unvollständigen Reihe
    const remainingObjects = numObjects % objectsPerRow;
    // Anzahl der Reihen insgesamt
    const totalRows = fullRows + (remainingObjects > 0 ? 1 : 0);
    return totalRows;
  };

  return (
    <React.Fragment>
      {leistungen.map((leistung, id) => {
        const { hintergrund, icon, text, ueberschrift, untertitel } = leistung;

        return (
          <Popup
            key={id}
            open={modals[id]}
            closePopup={() => closeModal(id)}
            text={text}
            ueberschrift={ueberschrift}
            subUeberschrift={untertitel}
            icon={icon}
            hintergrund={hintergrund}
          />
        );
      })}

      <CardsWrapper
        id="cards"
        spacing={{
          top: "white-component-inner-half",
          bottom: "white-component-inner",
        }}
        rowcount={calculateRows(leistungen.length)}
      >
        <Bubbels />

        <Title
          center
          text={ueberschrift}
          spacing={{ bottom: "white-component-inner-half" }}
          color="purple"
        />

        {useWindowDimensions().width > size.tablet ? (
          <SpaceWrapper
            spacing={{ left: "border", right: "border" }}
            className="cards"
          >
            {createCardsJSXArray(leistungen)}
          </SpaceWrapper>
        ) : (
          <MySwiper array={createCardsJSXArray(leistungen)} cards />
        )}
      </CardsWrapper>
    </React.Fragment>
  );
};

const CardsWrapper = styled(SpaceWrapper)`
  position: relative;
  background-color: white;
  z-index: 0;
  .cards {
    display: grid;
    justify-content: space-between;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(${(props) => props.rowcount}, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    gap: var(--cards-gap);

    @media ${device.laptop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .loader {
    }
  }

  .loader {
    &.title {
      margin: 0 auto;
    }
  }
`;

function Card({ title, text, icon, onClick }) {
  return (
    <CardWrapper onClick={onClick}>
      <div className="top-grid">
        <div className="title">{Parser(title)}</div>
      </div>
      <SpaceWrapper spacing={{ top: 20, bottom: 20 }} margin className="text">
        {Parser(text)}
      </SpaceWrapper>
      <Icon name={icon} height="icon-l" color="purple" className="icon" />
      <div className="cover">Mehr erfahren</div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  cursor: pointer;
  background: var(--secondary);
  padding: var(--cards-inner);
  border-radius: 20px;
  color: var(--primary);
  display: flex;
  flex-basis: 23%;
  flex-direction: column;
  position: relative;
  z-index: 50;

  .title {
    font-size: var(--fs-2);
    text-align: left;
    font-weight: var(--semibold);
  }

  .text {
    font-size: var(--fs-4);
    font-weight: var(--medium);
  }

  .icon {
    display: block;
    margin: 0 auto;
    margin-top: auto;
  }

  .top-grid {
    display: flex;
    justify-content: space-between;
    img {
      margin: auto 0;
    }
  }

  .cover {
    display: flex;
    opacity: 0;
    font-size: var(--fs-1);
    font-weight: var(--semibold);
    color: var(--secondary);
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--primary-hard-transparent);
    border-radius: 20px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;

    .cover {
      transition: opacity 0.2s ease;
      opacity: 1;
    }
  }

  @media ${device.laptop} {
    margin: 0 var(--border);
    max-width: var(--cards-max-width-tablet);
    margin-left: 10%;

    &:nth-child(2n) {
      margin-left: auto;
      margin-right: 10%;
    }
  }

  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

export default Cards;

function Popup({
  open,
  closePopup,
  text,
  ueberschrift,
  subUeberschrift,
  icon,
  hintergrund,
}) {
  return (
    open && (
      <PopupWrapper>
        {hintergrund && (
          <GatsbyImage
            image={getImage(hintergrund.localFile)}
            alt={hintergrund.alternativeText}
            className="background"
          />
        )}
        <Icon
          name={icon.iconID}
          className="bigIcon"
          onClick={() => closePopup()}
        />
        <SpaceWrapper
          spacing={{
            top: "popup-inner",
            left: "popup-inner",
            right: "popup-inner",
            bottom: "popup-inner",
          }}
          className="inner"
        >
          <div className="filter">
            <div className="top">
              <SpaceWrapper className="title">
                {Parser(ueberschrift)}
              </SpaceWrapper>
              <Icon
                className="icon"
                name="close"
                height="icon-l"
                onClick={() => closePopup()}
              />
            </div>
            {
              <SpaceWrapper
                className="subtitle"
                spacing={{ bottom: "popup-inner" }}
              >
                {subUeberschrift && Parser(subUeberschrift)}
              </SpaceWrapper>
            }
            <div className="scroll-container">
              <SpaceWrapper
                spacing={{ bottom: "popup-inner" }}
                className="text"
              >
                {Parser(text)}
              </SpaceWrapper>
            </div>
          </div>
        </SpaceWrapper>
      </PopupWrapper>
    )
  );
}

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: var(--background-filter-popup);
  overflow: hidden;

  .background {
    border-radius: 20px;
    position: fixed;
    top: var(--popup-border);
    bottom: var(--popup-border);
    left: var(--popup-border);
    right: var(--popup-border);
  }

  .bigIcon {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: var(--popup-icon-width);
    z-index: 201;
    opacity: 0.15;
  }

  .inner {
    position: absolute;
    top: var(--popup-border);
    left: var(--popup-border);
    bottom: var(--popup-border);
    right: var(--popup-border);
    border-radius: 20px;

    color: var(--secondary);

    .subtitle {
      font-size: var(--fs-2);
      font-weight: var(--medium);
    }

    .filter {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 20px;
      background-color: var(--primary-hard-transparent);
      padding: var(--popup-inner);

      .scroll-container {
        overflow-y: auto;
        overscroll-behavior: contain;
        display: block;

        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          background: var(--secondary-dim);
          border-radius: 20px;
        }

        ::-webkit-scrollbar-thumb {
          background: var(--secondary);
          border-radius: 20px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: transparent;
        }

        .text {
          font-size: var(--fs-3);
        }

        video {
          width: 70%;
          margin: 0 auto;
          display: block;
          position: relative;
          z-index: 202;
        }
      }
    }

    .top {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: var(--fs-1);
        font-weight: var(--semibold);
      }

      .icon {
        &:hover {
          cursor: pointer;
        }
      }
    }

    @media ${device.tablet} {
      background: ${(props) =>
        props.hintergrundMobile
          ? `url(${props.hintergrundMobile})`
          : "var(--primary)"};

      text-align: center;

      .filter {
        .top {
          flex-direction: column-reverse;
          justify-content: unset;
          align-items: flex-start;
          .title {
            margin: auto;
          }
        }
        .scroll-container {
          video {
            width: 100%;
          }
        }
      }
    }
  }
`;
