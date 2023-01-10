import axios from "axios";
import { apiSettings } from "../admin";
import * as qs from "qs";

const createLink = (populationArray, apiID) => {
  const query = qs.stringify(
    {
      populate: populationArray,
    },
    {
      encodeValuesOnly: true,
    }
  );

  return apiSettings().apiURL + "/" + apiID + "?" + query;
};

async function getUnternehmenSingleInfo(name) {
  return axios
    .get(apiSettings().apiURL + `/unternehmen?fields[0]=${name}`)
    .then((response) => response.data.data.attributes[`${name}`]);
}

export async function getWilkommen() {
  return axios
    .get(apiSettings().apiURL + "/welcome")
    .then((response) => response.data);
}

export async function getArbeit() {
  return axios
    .get(apiSettings().apiURL + "/arbeit")
    .then((response) => response.data);
}

export async function getHead() {
  return axios
    .all([
      axios.get(apiSettings().apiURL + `/unternehmen?`),
      axios.get(
        createLink(
          ["rechts", "rechts.icon", "rechts.text", "links", "links.info"],
          "head"
        )
      ),
    ])
    .then(
      axios.spread((unternehmen, data) => {
        data.data.data.attributes.links.info =
          unternehmen.data.data.attributes[
            data.data.data.attributes.links.info
          ];
        for (let i = 0; i < data.data.data.attributes.rechts.length; i++)
          data.data.data.attributes.rechts[i].text.info =
            unternehmen.data.data.attributes[
              data.data.data.attributes.rechts[i].text.info
            ];

        return data.data;
      })
    );
}

export async function getKontakt() {
  return axios
    .get(apiSettings().apiURL + "/kontakt")
    .then((response) => response.data);
}

export async function getLeistungen() {
  return axios
    .get(apiSettings().apiURL + "/leistungen")
    .then((response) => response.data);
}

export async function getRezensionen() {
  return axios
    .get(apiSettings().apiURL + "/rezensionen")
    .then((response) => response.data);
}

export async function getTeam() {
  return axios
    .get(apiSettings().apiURL + "/team")
    .then((response) => response.data);
}

export async function getUnternehmen() {
  return axios
    .get(apiSettings().apiURL + "/unternehmen")
    .then((response) => response.data);
}

export async function getAGB() {
  return axios
    .get(apiSettings().apiURL + "/agb")
    .then((response) => response.data);
}

export async function getImpressum() {
  return axios
    .get(apiSettings().apiURL + "/impressum")
    .then((response) => response.data);
}

export async function getFooter() {
  return axios
    .get(apiSettings().apiURL + "/footer")
    .then((response) => response.data);
}
