import React from "react";
import Fun from "./fun";

export default {
  title: "Components/Fun",
  component: Fun,
};

const Template = (args) => <Fun {...args} />;

export const Default = Template.bind({});
Default.args = {};
