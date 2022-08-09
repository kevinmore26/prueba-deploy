import axios from "axios";

const URL = `https://llegoshopback.herokuapp.com/gestion/producto-filtro?disponible=true&subtipo=kfc`;

const comidaRapidaKfc = async (busqueda = "") => {
  try {
    let { data } = await axios.get(
      `https://llegoshopback.herokuapp.com/gestion/producto-filtro?disponible=true&subtipo=kfc`
    );
    console.log(data.content);
    return data.content;
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};

const comidaRapidaKfcPorId = async (subtipo,id) => {
  try {
    let { data } = await axios.get(
      `https://llegoshopback.herokuapp.com/gestion/producto-filtro?disponible=true&subtipo=${subtipo}&id=${id}`
    );
    console.log(data.content);
    return data.content[0];
  } catch {
    console.log("error");
    //si hay errores captura ese error
  }
};
export { comidaRapidaKfc, comidaRapidaKfcPorId };
