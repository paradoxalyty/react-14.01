import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import {Message} from './Message'

describe("Message", () => {
    it("contains text", ()=> {
        const props = {
            text: "Oristarkh",
            content: "Hello!",
        }
        const element = shallow(<Message {...props} />);

        expect(element.contains(<strong>{props.text}</strong>)).toBe(true)

    })

    it("render content", ()=> {
        const props = {
            text: "Oristarkh",
            content: "Hello!",
        }
        const element = renderer.create(<Message {...props} />).toJSON();

        expect(element).toMatchSnapshot();

    })
})