import React, { useEffect, useRef, useState } from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";
import Bubbels from "./Effects/Bubbels";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import MySwiper from "../components/Global/MySwiper";
import Loader from "./Global/Loader";
import { Parser, createImgUrl } from "../utils/utils";
import { useGlobalState } from "../utils/globalState";

const Cards = ({ fetchData }) => {
  const [data, setData] = useState(null);
  const [context, dispatch] = useGlobalState();

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
      res.data.attributes.leistungen.map((leistung) => {
        dispatch({
          type: "ADD_POPUP",
          value: { popupID: leistung.id, open: false },
        });
        return 1;
      });
    });
  }, [fetchData, dispatch]);

  const createCardsJSXArray = (dataArray, dispatch) => {
    return dataArray.map(({ textPreview, ueberschrift, icon, id }) => (
      <Card
        text={textPreview}
        title={ueberschrift}
        icon={icon.icon}
        key={id}
        onClick={() => {
          dispatch({
            type: "SET_POPUP_STATUS",
            value: { popupID: id, open: true },
          });
        }}
      />
    ));
  };

  const getPopupById = (id) => {
    return context.popups.find((popup) => popup.popupID === id);
  };

  const createPopupJSXArray = (dataArray, dispatch) => {
    return dataArray.map((leistung) => {
      return (
        <Popup
          video={
            leistung.video.data
              ? createImgUrl(leistung.video.data.attributes.url)
              : null
          }
          key={leistung.id}
          open={getPopupById(leistung.id).open}
          closePopup={() => {
            dispatch({
              type: "SET_POPUP_STATUS",
              value: { popupID: leistung.id, open: false },
            });
          }}
          text={leistung.text}
          ueberschrift={leistung.ueberschrift}
          subUeberschrift={leistung.untertitel}
          icon={leistung.icon}
          hintergrund={
            leistung.background.data
              ? createImgUrl(leistung.background.data.attributes.url)
              : null
          }
          hintergrundMobile={
            leistung.backgroundMobile.data
              ? createImgUrl(leistung.backgroundMobile.data.attributes.url)
              : null
          }
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
      {data && createPopupJSXArray(data.leistungen, dispatch)}
      <CardsWrapper
        id="cards"
        spacing={{
          top: "white-component-inner-half",
          bottom: "white-component-inner",
        }}
        rowcount={data ? calculateRows(data.leistungen.length) : 1}
      >
        <Bubbels />
        {data ? (
          <Title
            center
            text={data.ueberschrift}
            spacing={{ bottom: "white-component-inner-half" }}
            color="purple"
          />
        ) : (
          <Loader
            title
            color="primary"
            spacing={{ bottom: "white-component-inner-half" }}
          />
        )}
        {useWindowDimensions().width > size.tablet ? (
          <>
            {data ? (
              <SpaceWrapper
                spacing={{ left: "border", right: "border" }}
                className="cards"
              >
                {createCardsJSXArray(data.leistungen, dispatch)}
              </SpaceWrapper>
            ) : (
              <Loader dots />
            )}
          </>
        ) : (
          <>
            {data ? (
              <MySwiper
                array={createCardsJSXArray(data.leistungen, dispatch)}
                cards
              />
            ) : (
              <Loader dots />
            )}
          </>
        )}
      </CardsWrapper>
    </React.Fragment>
  );
};

const CardsWrapper = styled(SpaceWrapper)`
  position: relative;

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
      <div className="cover">Mehr Erfahren</div>
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

    :nth-child(2n) {
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
  hintergrund,
  hintergrundMobile,
  text,
  video,
  ueberschrift,
  subUeberschrift,
  icon,
}) {
  const scrollref = useRef(null);
  useEffect(() => {
    if (open && scrollref.current) {
      scrollref.current.focus();
    }
  }, [open]);

  return (
    open && (
      <PopupWrapper
        hintergrund={hintergrund}
        hintergrundMobile={hintergrundMobile}
      >
        <Icon
          name={icon.icon}
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
            <SpaceWrapper
              className="subtitle"
              spacing={{ bottom: "popup-inner" }}
            >
              {Parser(subUeberschrift)}
            </SpaceWrapper>
            <div tabIndex={0} ref={scrollref} className="scroll-container">
              <SpaceWrapper
                spacing={{ bottom: "popup-inner" }}
                className="text"
              >
                {Parser(text)}
              </SpaceWrapper>
              {video && (
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              )}
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
  z-index: 1000;
  background-color: var(--background-filter-popup);
  overflow: hidden;

  .bigIcon {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: var(--popup-icon-width);
    z-index: 1001;
    opacity: 0.15;
  }

  .inner {
    position: absolute;
    top: var(--popup-border);
    left: var(--popup-border);
    bottom: var(--popup-border);
    right: var(--popup-border);
    border-radius: 20px;

    background: ${(props) =>
      props.hintergrund ? `url(${props.hintergrund})` : "var(--primary)"};
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
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
          z-index: 1002;
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
        :hover {
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
