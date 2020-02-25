import React from "react";
import { shallow, mount, render } from "enzyme";
import { ChatForm } from "./ChatForm";
import Button from "@material-ui/core/Button";

describe("Message", () => {
    it("contains name", () => {
        const expectedName = "Dog";
        const expectedText = "";
        const props = {
            sendMessage: jest.fn()
        }
        const element = shallow(<ChatForm {...props} />);


        element.find({ label: 'Name' }).at(0).simulate('change', { currentTarget: { value: expectedName } });
        element.find({ label: 'Text' }).at(0).simulate('change', { currentTarget: { value: expectedText } });
        element.find(Button).simulate('click');

        expect(props.sendMessage).toHaveBeenCalledWith({ name: expectedName, text: expectedText });
    })
})