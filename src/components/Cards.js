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

const Cards = ({ fetchData }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((res) => {
      setData(res.data.attributes);
    });
  }, [fetchData]);

  const createCardsJSXArray = (dataArray) => {
    return dataArray.map(({ textPreview, ueberschrift, icon }, key) => (
      <Card text={textPreview} title={ueberschrift} icon={icon.icon} key={key} />
    ));
  };

  return (
    <CardsWrapper
      id="cards"
      spacing={{
        top: "white-component-inner-half",
        bottom: "white-component-inner",
      }}
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
              {createCardsJSXArray(data.leistungen)}
            </SpaceWrapper>
          ) : (
            <Loader dots />
          )}
        </>
      ) : (
        <>
          {data ? (
            <MySwiper array={createCardsJSXArray(data.leistungen)} cards />
          ) : (
            <Loader dots />
          )}
        </>
      )}
    </CardsWrapper>
  );
};

const CardsWrapper = styled(SpaceWrapper)`
  position: relative;

  .cards {
    display: grid;
    justify-content: space-between;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    gap: var(--cards-gap);

    @media ${device.laptop} {
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

function Card({ title, text, icon }) {
  return (
    <CardWrapper>
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

    :nth-child(2) {
      margin-left: auto;
      margin-right: 10%;
    }
  }

  @media ${device.tablet} {
    flex-basis: 100%;
  }
`;

export default Cards;
