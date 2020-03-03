import { shallow, mount, render } from "enzyme";
import React from "react";
import { Message } from "./Message";
import renderer from "react-test-renderer";

describe("Message", () => {
    it("contains name", () => {
        const props = {
            name: "Dog",
            content: "bork"
        }

        const element = shallow(<Message {...props} />)
        expect(element.contains(props.name)).toBe(true);
    });
    it("render content", () => {
        const props = {
            name: "Dog",
            content: "bork"
        }

        const element = renderer.create(<Message {...props} />).toJSON();

        expect(element).toMatchSnapshot();
    });
})