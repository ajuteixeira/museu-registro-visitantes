import { Document, Page, View, StyleSheet } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

const dados = [1200, 800, 230, 1900, "Centro"];

export const DownloadDocument = () => {
  const html = `
  <h2>Relatório de visitas - MIS</h2>
  <p><strong>Total de visitas: </strong></p> ${dados[0]}
  <p><strong>Número de visitantes únicos: </strong></p> ${dados[1]}
  <p><strong>Visitantes por gênero: </strong></p>  ${dados[2]}
  <p><strong>Número de visitantes por cidade: </strong></p> ${dados[3]}
  <p><strong>Bairro com mais visitantes: </strong></p> ${dados[4]}
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
