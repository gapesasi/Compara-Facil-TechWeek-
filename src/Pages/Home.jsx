import React, { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Logo from "../static/logo-Compara-Facil.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Checkbox from "@mui/material/Checkbox";

function Home() {
  const [loading, setloading] = useState(false);

  //   const latestCardsAPIRequest = async () => {
  //     try {
  //       await axios
  //         .get("http://localhost:8080/ultimos_adicionados")
  //         .then((response) => {
  //           setUltimosCards(response.data);
  //         });
  //       await axios
  //         .get("http://localhost:8080/base_de_dados")
  //         .then((response) => {
  //           setContador(response.data.tamanho);
  //           setValor(response.data.valorTotal);
  //           setnextID(response.data.nextID);
  //         });

  //       setloading(true);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   useEffect(() => {
  //     latestCardsAPIRequest();
  //   }, []);

  return (
    <div className="Home">
      {/* {loading ? ( */}
      <div className="Home-Page">
        <div className="upper-card">
          <div className="upper-info">
            <div className="logo">
              <Avatar alt="Logo da empresa Compara fácil." src={Logo} />
            </div>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </div>
          <div className="main-info">
            Encontre o que você precisa na palma da mão!
          </div>
          <div className="main-filters">
            <div className="item1">
              <Checkbox/>
              <p>Melhores Preços</p>
            </div>
            <div className="item2">
              <Checkbox /> <p>Maior Qualidade</p>
            </div>
            <div className="item3">
              <Checkbox /> <p>Melhor Atendimento</p>
            </div>
            {/* <div className="item4">
              <Checkbox /> <p>Melhores Preços</p>
            </div> */}
          </div>
        </div>
        <div className="bottom-info">
          <p>Busque o seu produto!</p>
          <div className="search-engine">
            <TextField id="outlined-basic" label="Buscar" variant="outlined" />
            <Button variant="outlined" startIcon={<SearchIcon />}></Button>
          </div>
        </div>
      </div>
      {/* ) : (
        <ReactBootstrap.Spinner animation="border" />
      )} */}
    </div>
  );
}

export default Home;
