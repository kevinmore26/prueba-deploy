import { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";
import NavTop from "../components/NavtopCheckout";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import {
  AuthReactContext,
  AuthReactProvider,
} from "../context/reactAuthContext";

import Swal from "sweetalert2";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Image,
  Container,
} from "react-bootstrap";
import { editarUsuario } from "../services/usuarioService";
import FormProductoCheckout from "../components/FormCheckout";
import Loading from "../components/Loading";
import { AuthContext } from "../context/authContext";
import IniciarSecionView from "./IniciarSecionView";

export default function CheckoutView() {
  const { carrito } = useContext(CarritoContext);
  const { id } = useParams();
  const {userState} = useContext(AuthContext);
  const [authPending, setAuthPending] = useState(false);
  const { user } = useContext(AuthReactContext);
  console.log(user);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    clienteApellido: "",
    clienteCelular: "",
    clienteCorreo: "",
    clienteDireccion: "",
    clienteNombre: "",
    clienteDocumento: "",
  });
  const getUsuario = async () => {
    console.log("productoObtenido");
    user.clienteDireccion=value.clienteDireccion
    try {
      setAuthPending(true);
      const productoObtenido = user.content;
      setAuthPending(false);
      console.log(productoObtenido);
      setValue({ ...user.content });
    } catch (error) {
      console.error(error);
    }
  };
  const getUsuarioCopia = async () => {
    console.log("productoObtenido");
    user.clienteDireccion=value.clienteDireccion
    try {
      setAuthPending(true);
      const productoObtenido = user.content;
      setAuthPending(false);
      console.log(productoObtenido);
      setValue({ ...user.content });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
 
    getUsuarioCopia();
  }, []);
  useEffect(() => {
    console.log(user)
    getUsuarioCopia();
  }, []);
  useEffect(() => {
    getUsuario();
  }, []);
 

  console.log(user);

  const actualizarInput = (e) => {
    user.clienteDireccion=value.clienteDireccion
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const manejarSubmit = async (e) => {
    e.preventDefault();

    console.log(value);
    try {
      console.log(value);
      user.clienteDireccion=value.clienteDireccion
      await editarUsuario(value, value.user_id);
      console.log(user)
      //user.content.clienteDireccion  = value.clienteDireccion
      await Swal.fire({
        icon: "success",
        title: "Dirección actualizada exitosamente",
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: "Volver",
        denyButtonText: "Cancelar",
      })
      .then((resultado) => {
        if (resultado.isConfirmed) {
          setAuthPending(true);
          navigate('/checkout')
          setAuthPending(false);
        } else {
          navigate('/checkout')
        }
      });
    } catch (error) {
      console.log("errorrrrr");
    }
  };

  

  let total = 0;
  let subTotal = 0;
  let envio = 3;
  subTotal = carrito.reduce((acum, item) => {
    return acum + item.cantidad * item.productoPrecio;
  }, 0);
  total = carrito.reduce((acum, item) => {
    return envio + acum + item.cantidad * item.productoPrecio;
  }, 0);
  if (authPending) {
    return <Loading />;
  }




  return (

    <div>
       {user == null && userState == null? (
        <IniciarSecionView />
      ) : (
    <div className="container">
      <NavTop />

      <div
        className="row justify-around "
        style={{
          position: "relative",
          top: "60px",
          justifyContent: "space-between",
        }}
      >
        <div
          className="col-4 col-md-5"
          style={{
            margin: "35px",
            textAlign: "left",
          }}
        >
          <section>
            <h3
              style={{
                textAlign: "left",
                color: "#0651F2",
              }}
            >
              Datos de envío
            </h3>
            
            <h6
              style={{
                textAlign: "left",
                color: "#0651F2",
              }}
            >
              Por favor ingrese su dirección de envío
            </h6>
            <hr></hr>
            <FormProductoCheckout value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}/>
          </section>
        </div>

        <div
          className="col-4 col-md-4"
          style={{
            marginTop: "38px",
            fontFamily: "Lato, Tahoma, Sans-Serif",
          }}
        >
          <p>
            Por favor verifique los productos e indique los datos solicitados
          </p>
          <div className="row">
            <div
              className="col-sm-12 col-md-6"
              style={{
                width: "41vw",
              }}
            >
              <ul className="list-group">
                {total !== 0 ? (
                  <div
                    style={{
                      border: "0.5px solid #00000026",
                      padding: "30px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#0651F2",
                      }}
                    >
                      RESUMEN DE LA ORDEN
                    </div>

                    <div>
                      <hr></hr>
                      {carrito.map((prod, i) => (
                        <li
                          className="  d-flex justify-content-between"
                          key={i}
                        >
                          <div>
                            <div
                              className="fw-bold"
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                fontSize: "14px",
                                lineHeight: "14px",
                                padding: "2px 0px",
                                width: "100px",
                              }}
                            >
                              {prod.productoNombre}
                            </div>
                            <small style={{ fontSize: "10px" }}>
                              {" "}
                              {prod.cantidad} un.
                            </small>
                            <br />
                          </div>
                          <div>
                            <small
                              className="badge   "
                              style={{
                                fontSize: "14px",
                                color: "black",
                              }}
                            >
                              S/ {prod.cantidad * prod.productoPrecio}
                            </small>
                          </div>
                        </li>
                      ))}
                      <hr></hr>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>SubTotal </p>
                        <p>S/{subTotal.toFixed(2)}</p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Envío </p>
                        <p>S/6.00</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h6 style={{ fontWeight: "bold", color: "#0651F2" }}>
                          TOTAL{" "}
                        </h6>

                        <h6 style={{ fontWeight: "bold" }}>
                          S/{total.toFixed(2)}
                        </h6>
                      </div>
                      <hr></hr>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        <button
                          disabled={
                            value.clienteCorreo == null ||
                            value.clienteCorreo == ""
                              ? true
                              : false
                          }
                          className="btn"
                          style={{
                            backgroundColor: "#0651F2",
                            borderRadius: "5px",
                            color: "white",
                            padding: "10px",

                            margin: "0 auto",
                            marginTop: "10px",
                          }}
                        >
                          <Link
                            to="/home"
                            style={{
                              color: "white",
                              textDecoration: "none",
                            }}
                          >
                            IR A PAGAR
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <li className="list-group-item">
                    Todavía no ha agregado ningún producto.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>)}
    </div>
  );
}
