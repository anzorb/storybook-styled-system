import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const El = ({ children }) => <div>{children}</div>;

const ElComponent = styled(El)``;

ElComponent.propTypes = {
	width: PropTypes.number
};

export default ElComponent;
