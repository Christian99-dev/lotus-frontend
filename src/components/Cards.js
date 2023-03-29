import React, { useEffect, useState } from "react";
import Title from "./Global/Titel";
import SpaceWrapper from "../utils/SpaceWrapper";
import styled from "styled-components";
import Icon from "../components/Global/Icon";
import Bubbels from "./Effects/Bubbels";
import { device, size } from "../theme/breakpoints";
import useWindowDimensions from "../utils/useWindowDimensions";
import MySwiper from "../components/Global/MySwiper";
import Loader from "./Global/Loader";
import { parser } from "../utils/utils";
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
      });
    });
  }, [fetchData]);

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
          key={leistung.id}
          open={getPopupById(leistung.id).open}
          closePopup={() => {
            dispatch({
              type: "SET_POPUP_STATUS",
              value: { popupID: leistung.id, open: false },
            });
          }}
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
  }


  return (
    <React.Fragment>
      {data && createPopupJSXArray(data.leistungen, dispatch)}
      <CardsWrapper
        id="cards"
        spacing={{
          top: "white-component-inner-half",
          bottom: "white-component-inner",
        }}
        rowCount={data ? calculateRows(data.leistungen.length) : 1}
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
    grid-template-rows: repeat(${props => props.rowCount}, 1fr);
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
      <div className="title">{title}</div>
      <SpaceWrapper spacing={{ top: 20, bottom: 20 }} margin className="text">
        {parser(text)}
      </SpaceWrapper>
      <Icon name={icon} height="icon-l" color="purple" className="icon" />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: var(--secondary);
  padding: var(--cards-inner);
  border-radius: 20px;
  color: var(--primary);
  display: flex;
  flex-basis: 23%;
  flex-direction: column;

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

function Popup({ open, closePopup }) {
  return (
    open && (
      <PopupWrapper onClick={() => closePopup()}>
        <SpaceWrapper
          spacing={{
            top: "popup-inner",
            left: "popup-inner",
            right: "popup-inner",
            bottom: "popup-inner",
          }}
          className="inner"
        >
          <Icon
            className="icon"
            name="close"
            color="purple"
            height="icon-l"
            onClick={() => closePopup()}
          />
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

  z-index: 9999;
  background-color: var(--background-filter-popup);

  .inner {
    position: absolute;
    top: var(--popup-border);
    left: var(--popup-border);
    bottom: var(--popup-border);
    right: var(--popup-border);
    z-index: 999999;

    background-color: white;
    border-radius: 20px;
  }

  .icon {
    :hover {
      cursor: pointer;
    }
  }
`;
