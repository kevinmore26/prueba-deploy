import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function GroupProducts({ productos  }) {
  console.log(productos)
 
  let totalComprado = 0;
 
 
 
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="container">
        <h5>RESULTADOS:  <span>{productos.length} items</span></h5>
       
        <div className="row mt-3">
          {productos.map((prod, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link to={`/comidarapidalist/productoskfc/${prod.productoId}`}>
                <div>
                  <img
                  style={{borderRadius:"8px"}}
                    src={prod.productoFoto}
                    alt={prod.productoFoto}
                    className="card-img-top"
                  />
                </div>
              </Link>
              <div className="card-body mt-3" >
                <h6 className="card-title">{prod.productoNombre}</h6>
                <span 
                style={{
                  fontSize: "14px",
                  color: "#aaa",
                  fontWeight: "400",
                  textDecoration:"line-through",
                  lineHeight:"1.3rem"
                }}
              >
             
              </span> 
                <div>
                  <span style={{color:"#0054FD",fontWeight:"bold"}}>S/{prod.productoPrecio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
