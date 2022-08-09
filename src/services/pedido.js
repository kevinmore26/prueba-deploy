import axios from "axios";

const URL = `https://llegoshopback.herokuapp.com/gestion/pedido`;

const pedido = async (pedido) => {
  try {
    let { data } = await axios.post(URL, pedido);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export { pedido };
