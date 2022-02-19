import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Box, Button, Balance, Details } from "../UI";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

const IconMargin = styled(Icon)`
   margin-top: 2px;
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <Balance style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        < Details>
          <Icon src={dinheiro} alt="Ícone Saldo" />
        </ Details>
        {toggleState ? (
          <Balance>
            < Details >R$</ Details> 0,00{" "}
          </Balance>
        ) : null}
      </Balance>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Conta;
