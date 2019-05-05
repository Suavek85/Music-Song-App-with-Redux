import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardList from "./CardList";

configure({ adapter: new Adapter() });

describe("<CardList />", () => {
 
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("should render zero h1 items if cardshow is false", () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper.find("h1")).toHaveLength(0);
  });

});
