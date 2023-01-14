import axios from "axios";
import { apiSettings } from "../admin";
import * as qs from "qs";
import Kontakt from "../components/Kontakt";
import { create } from "yup/lib/Reference";

const createLink = (populationArray, apiID) => {
  const query = qs.stringify(
    {
      populate: populationArray,
    },
    {
      encodeValuesOnly: true,
    }
  );

  return apiSettings().apiCallUrl + "/" + apiID + "?" + query;
};

export async function getWilkommen() {
  return axios
    .get(createLink(["text", "subtext", "hintergrund"], "welcome"))
    .then((response) => response.data);
}

export async function getArbeit() {
  return axios.get(createLink(["hintergrund"], "arbeit")).then((res) => {
    return res.data;
  });
}

export async function getHead() {
  return axios
    .get(
      createLink(
        ["rechts", "rechts.icon", "rechts.text", "links", "links.info"],
        "head"
      )
    )
    .then((res) => {
      return res.data;
    });
}

export async function getKontakt() {
  return axios
    .get(
      createLink(
        ["infos", "infos.text", "infos.icon", "mapLocation", "hintergrund"],
        "kontakt"
      )
    )
    .then((response) => response.data);
}

export async function getLeistungen() {
  return axios
    .get(createLink(["leistungen", "leistungen.icon"], "leistungen"))
    .then((response) => response.data);
}

export async function getRezensionen() {
  return axios
    .get(createLink(["rezensionen", "rezensionen.bild"], "rezensionen"))
    .then((response) => response.data);
}

export async function getTeam() {
  return axios
    .get(createLink(["mitarbeiter", "mitarbeiter.bild"], "team"))
    .then((response) => response.data);
}

export async function getUnternehmen() {
  return axios
    .get(createLink(["logo", "logo_textless"], "unternehmen"))
    .then((response) => response.data);
}

export async function getAGB() {
  return axios
    .get(apiSettings().apiCallUrl + "/agb")
    .then((response) => response.data);
}

export async function getImpressum() {
  return axios
    .get(apiSettings().apiCallUrl + "/impressum")
    .then((response) => response.data);
}

export async function getFooter() {
  return axios
    .get(apiSettings().apiCallUrl + "/footer")
    .then((response) => response.data);
}

/** Modified */

export async function getArbeitModified() {
  return axios.all([getArbeit(), getUnternehmen()]).then(
    axios.spread((arbeit, unternehmen) => {
      arbeit.data.attributes.logo_textless =
        unternehmen.data.attributes.logo_textless;
      return arbeit;
    })
  );
}

export async function getHeadModified() {
  return axios.all([getHead(), getUnternehmen(), getWilkommen()]).then(
    axios.spread((head, unternehmen, willkommen) => {
      head.data.attributes.links.info =
        unternehmen.data.attributes[head.data.attributes.links.info];

      for (let i = 0; i < head.data.attributes.rechts.length; i++)
        head.data.attributes.rechts[i].text.info =
          unternehmen.data.attributes[head.data.attributes.rechts[i].text.info];

      head.data.attributes.logo = unternehmen.data.attributes.logo;
      head.data.attributes.logo_textless =
        unternehmen.data.attributes.logo_textless;

      head.data.attributes.hintergrund = willkommen.data.attributes.hintergrund;

      return head;
    })
  );
}

export async function getKontaktModified() {
  return axios.all([getKontakt(), getUnternehmen()]).then(
    axios.spread((kontakt, unternehmen) => {
      for (let i = 0; i < kontakt.data.attributes.infos.length; i++)
        kontakt.data.attributes.infos[i].text.info =
          unternehmen.data.attributes[
            kontakt.data.attributes.infos[i].text.info
          ];

      return kontakt;
    })
  );
}
