import React from 'react';
import './PushToggle.sass';

export default class PushToggle extends React.Component {
    render() {
        return <div className="push">
            <img className="push_image" src="/1-src/components/PushToggle/push-off.png" alt="Push Notification" />
        </div>
    }
}
