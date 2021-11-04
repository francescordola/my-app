import React from "react";

import { ButtonOriginal } from "./ButtonOriginal";

export default {
  title: "Example/ButtonOriginal",
  component: ButtonOriginal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ButtonOriginal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Ciao",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
