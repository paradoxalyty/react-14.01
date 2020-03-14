import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {ChatForm} from './ChatForm';
import Button from '@material-ui/core/Button';

describe("Message", () => {
    it("contains text", ()=> {
        const expectedText = "Vahtang";
        const expectedContent = "Random text";
        const props = {
            sendMessage: jest.fn()
        }
        const element = shallow(<ChatForm {...props} />);

        element.find({placeholder: 'User'}).at(0).simulate('change', {currentTarget: {value: expectedText}});
        element.find({placeholder: 'Message'}).at(0).simulate('change', {currentTarget: {value: expectedContent}});
        element.find(Button).simulate('click');

        expect(props.sendMessage).toHaveBeenCalledWith({text: expectedText, content: expectedContent});

    });
});