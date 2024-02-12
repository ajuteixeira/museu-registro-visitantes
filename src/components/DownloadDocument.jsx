import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import CountData from "../utils/CountData";

export const DownloadDocument = ({ visitante }) => {
  // Compara os indexes e retorna verdadeiro ou falso se o elemento for duplicado dentro do array
  function isUniqueCpf(cpf, index, cpfs) {
    return cpfs.indexOf(cpf) === index;
  }

  const totalVisits = visitante.length;
  const visitorsCpfs = visitante.map((vis) => vis.visitante_cpf);
  const uniqueVisitors = visitorsCpfs.filter((cpf, index) =>
    isUniqueCpf(cpf, index, visitorsCpfs)
  ).length;
  const visitorsByGenre = CountData(visitante, "visitante_genero");
  const visitorsByCity = CountData(visitante, "visitante_cidade");

  // Object.entries transforma um objeto em um array de arrays: {a: 3, c: 4} => [['a', 3], ['c', 4]]
  const formattedObject = Object.entries(
    // CountData transforma o objeto "visitante" em um objeto onde as chaves são os valores do "visitante_bairro" e os valores são as quantidades de cada uma dessas chaves
    CountData(visitante, "visitante_bairro")
    // Como estamos fazendo o sort em cima de um array de arrays, nós queremos pegar o elemento especifico do subarray para utilizar no sort, no caso esse elemento é o segundo elemento do subarray. Exemplo: ['aerolandia', 5] 'aerolandia' seria primeiro elemento e 5 seria o segundo, 5 seria o elemento que vai ser armazenado na variavel (a).
  ).sort(([, a], [, b]) => b - a)[0];

  const neighborhoodWithMostVisitors = formattedObject ? formattedObject : [[]];

  const renderObjectAsHTML = (obj) => {
    let completeHTML = "";
    Object.keys(obj).forEach((key, index) => {
      completeHTML += `<span>${key} (${obj[key]})</span>`;
      if (index < Object.keys(obj).length - 1) {
        completeHTML += ", ";
      }
    });

    return completeHTML;
  };

  const html = `
  <h2>Relatório de visitas - MIS</h2>
  <p>Total de visitas: ${totalVisits}</p> 
  <p>Número de visitantes únicos: ${uniqueVisitors}</p> 
  <p>Visitantes por gênero: ${renderObjectAsHTML(visitorsByGenre)}</p>  
  <p>Número de visitantes por cidade: ${renderObjectAsHTML(visitorsByCity)}</p> 
  <p>Bairro com mais visitantes: ${neighborhoodWithMostVisitors[0]} (${
    neighborhoodWithMostVisitors[1]
  })</p> 
    `;
  const css = StyleSheet.create({
    page: {
      padding: 60,
    },
  });
  return (
    <Document>
      <Page size="A4" style={css.page}>
        <View>
          <Html>{html}</Html>
        </View>
      </Page>
    </Document>
  );
};
