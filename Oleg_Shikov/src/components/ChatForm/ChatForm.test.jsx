import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {ChatForm} from './ChatForm';
import Button from '@material-ui/core/Button';

describe("Message", () => {
    it("contains name", ()=> {
        const expectedName = "Ivan";
        const expectedContent = "Some message from Ivan";
        const props = {
            onSendMessage: jest.fn()
        }
        const element = shallow(<ChatForm {...props} />);

        element.find({ label: 'Автор' }).at(0).simulate('change', {currentTarget: {value: expectedName}});
        element.find({ label: 'Сообщение' }).at(0).simulate('change', {currentTarget: {value: expectedContent}});
        element.find(Button).simulate('click');

        expect(props.onSendMessage).toHaveBeenCalledWith({name: expectedName, content: expectedContent});

    });
});