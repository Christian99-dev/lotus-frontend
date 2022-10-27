import * as React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TextWithBackground from "../components/TextWithBackground";
import Titel from "../components/Titel";
import Layout from "../theme/globalStyles";

const IndexPage = () => {
  return (
    <Layout>
      <Button text="Button" />
      <Button text="Button" color="purple" />
      <Button text="Button" color="transparent" />
      <Input text="Input"/>
      <TextWithBackground text="Lorem tesinougse" fontSize="3" color="purple"/>
      <TextWithBackground text="Lorem tesinougse" fontSize="3"/>
      <Titel text="Title" color="purple"/>
      <Titel text="Title" />

    </Layout>
  );
};

export default IndexPage;


