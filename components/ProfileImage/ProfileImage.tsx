import React, { FC } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  margin: 1em;
  border-radius: 0.5em;
`;

const ProfileImage: FC = () => {
  return (
    <StyledImage src="/profile.jpg" width="160" height="190" alt="profile" />
  );
};

export default ProfileImage;
