/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Profile from "./Profile";

export default {
  title: "components/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const StandardProfile = Template.bind({});
StandardProfile.args = {
  user: {},
};
