import React from "react";
import Invoice from "../foodinvoice/Invoice";

export default {
  title: "foodinvoice/Invoice",
  component: Invoice,
};

const Template = (args) => <Invoice {...args} />;

export const Default = Template.bind({});