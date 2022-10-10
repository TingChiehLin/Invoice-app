import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  width: 103px;
  height: 100vh;
  background-color: #373b53;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  height: 103px;
  background: linear-gradient(45deg, #7c5dfa, #9277ff);
  border-radius: 0px 20px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const avatar = {
  borderRadius: "50%",
};

const NavBarLayout: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);

  const modeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <NavBar>
      <LogoContainer>
        <Image
          alt={"logo"}
          src={"/assets/logo.svg"}
          width={"40px"}
          height={"37.71px"}
        />
      </LogoContainer>
      <BottomContainer>
        {isDarkMode ? (
          <Image
            alt={"sunMode"}
            src={"/assets/icon-sun.svg"}
            width={"20px"}
            height={"20px"}
            onClick={modeHandler}
          />
        ) : (
          <Image
            alt={"moonMode"}
            src={"/assets/icon-moon.svg"}
            width={"20px"}
            height={"20px"}
            onClick={modeHandler}
          />
        )}

        <Image
          style={avatar}
          alt={"Davatar"}
          src={"/assets/image-avatar.jpg"}
          width={"40px"}
          height={"40px"}
        />
      </BottomContainer>
    </NavBar>
  );
};

export default NavBarLayout;
