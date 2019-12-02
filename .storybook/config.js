import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import userTheme from "../src/theme";

addDecorator(story => (
	<ThemeProvider theme={userTheme}>{story()}</ThemeProvider>
));

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
