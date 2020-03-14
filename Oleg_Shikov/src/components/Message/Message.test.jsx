import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import {Message} from './Message';

describe("Message", () => {
    it("contains name", ()=> {
        const props = {
            name: "Ivan",
            content: "Hello",
        }
        const element = shallow(<Message {...props} />);

        expect(element.contains(<strong>{props.name}:</strong>)).toBe(true)

    });

    it("render content", ()=> {
        const props = {
            name: "Ivan",
            content: "Hello",
        }
        const element = renderer.create(<Message {...props} />).toJSON();

        expect(element).toMatchSnapshot();

    });
});