import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import styledPropTypes from "@styled-system/prop-types";
import space from "@styled-system/space";

const El = styled.div`
	${space}
`;

const ElComponent = props => <El {...props} />;

ElComponent.propTypes = {
	...styledPropTypes.space,
	width: PropTypes.number
};

export default ElComponent;
