import styled from "styled-components";
import styledPropTypes from "@styled-system/prop-types";
import space from "@styled-system/space";

const El = styled.div`
	${space}
`;

El.propTypes = {
	...styledPropTypes.space
};

export default El;
