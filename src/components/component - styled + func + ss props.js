import React from "react";
import styled from "styled-components";
import styledPropTypes from "@styled-system/prop-types";
import space from "@styled-system/space";

const El = styled.div`
	${space}
`;

const ElComponent = props => <El {...props} />;

ElComponent.propTypes = {
	...styledPropTypes.space
};

export default ElComponent;
