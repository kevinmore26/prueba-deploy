import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Search extends Component {
  state = {
    term: "",
    a:""
  };
  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
    
  };
  submitSearch = (event) => {
    event.preventDefault();
    console.log(event);
    let { term } = this.state;
 
    this.props.searchAlbums(term);
 
  };
  render() {
    return (
      <div
        className="search mb-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={(event) => this.submitSearch(event)}>
          <div className="row" style={{ display: "flex" }}>
            <div className="col-md-10">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Busca productos"
                  className="form-control  "
           
                  value={this.state.term}
                  style={{
                    background: "#FFFFFF",
                    /* Gray */

                    border: "none",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    width: "550px",
                    height: "25px",
                    margin: "0 auto",
                    left: "25px",
                    top:"3px",
                    position:"relative",
                    padding: "20px 20px",
                  }}
                  onChange={(event) => this.handleInputChange(event)}
                ></input>
              </div>
            </div>

            <div className="col-md-2">
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    margin: "0 auto",

                    fontFamily: "Font Awesome 5 Free",
                    fontStyle: "normal",
                    fontWeight: "900",
                    fontSize: "18px",
                    lineHeight: "21px",
                    height: "18px",
                    /* Soft gray */
                    color: "#0651F2",
                  }}
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
