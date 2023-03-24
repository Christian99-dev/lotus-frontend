import axios from "axios";
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

  return process.env.GATSBY_API_SERVER_URL + "/api/" + apiID + "?" + query;
};

export async function getWilkommen() {
  return axios
    .get(
      createLink(
        ["text", "subtext", "hintergrund", "hintergrundMobile"],
        "wilkommen"
      )
    )
    .then((response) => response.data);
}

export async function getArbeit() {
  return axios
    .get(createLink(["hintergrund", "hintergrundMobile"], "arbeit"))
    .then((res) => {
      return res.data;
    });
}

export async function getHead() {
  return axios
    .get(
      createLink(
        ["rechts", "rechts.icon", "rechts.text", "links", "links.info"],
        "header"
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
        [
          "infos",
          "infos.text",
          "infos.icon",
          "mapLocation",
          "hintergrund",
          "hintergrundMobile",
          "mapSpeechbubbleText",
        ],
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
    .get(
      createLink(
        ["mitarbeiter", "mitarbeiter.bild", "mitarbeiter.bildMobile"],
        "team"
      )
    )
    .then((response) => response.data);
}

export async function getUnternehmen() {
  return axios
    .get(createLink(["logo", "logo_textless"], "unternehmen"))
    .then((response) => response.data);
}

export async function getAGB() {
  return axios
    .get(process.env.GATSBY_API_SERVER_URL + "/api/agb")
    .then((response) => response.data);
}

export async function getImpressum() {
  return axios
    .get(process.env.GATSBY_API_SERVER_URL + "/api/impressum")
    .then((response) => response.data);
}

export async function getFooter() {
  return axios
    .get(
      createLink(
        [
          "adresse",
          "socials",
          "kontakt",
          "socials.icon",
          "kontakt.icon",
          "kontakt.text",
        ],
        "footer"
      )
    )
    .then((response) => response.data);
}

export async function getPageNotFound() {
  return axios.get(createLink([], "page-not-found")).then((res) => res.data);
}

/** Modified */
export async function getWilkommenModified() {
  return axios.all([getWilkommen(), getUnternehmen()]).then(
    axios.spread((willkommen, unternehmen) => {
      willkommen.data.attributes.text.info =
        unternehmen.data.attributes[willkommen.data.attributes.text.info];

      willkommen.data.attributes.subtext.info =
        unternehmen.data.attributes[willkommen.data.attributes.subtext.info];

      return willkommen;
    })
  );
}

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

      kontakt.data.attributes.mapSpeechbubbleText.info =
        unternehmen.data.attributes[
          kontakt.data.attributes.mapSpeechbubbleText.info
        ];

      return kontakt;
    })
  );
}

export async function getFooterModified() {
  return axios.all([getFooter(), getUnternehmen()]).then(
    axios.spread((footer, unternehmen) => {
      for (let i = 0; i < footer.data.attributes.kontakt.length; i++)
        footer.data.attributes.kontakt[i].text.info =
          unternehmen.data.attributes[
            footer.data.attributes.kontakt[i].text.info
          ];

      for (let i = 0; i < footer.data.attributes.adresse.length; i++)
        footer.data.attributes.adresse[i].info =
          unternehmen.data.attributes[footer.data.attributes.adresse[i].info];

      return footer;
    })
  );
}
