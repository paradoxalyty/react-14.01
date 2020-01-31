import React from 'react';
import PropTypes from 'prop-types';


export class Chat extends React.Component {
    state ={
        chats: {
            1:{
                id:1,
                name: 'Chat 1',
                messages: [
                                { name: 'Name1', content: 'Text1' }  
                            ],
                },
            2: {
                id:2,
                name: 'Chat 2',
                messages: [
                                { name: 'Name2', content: 'Text2' }
                                
                ]
                },
            3: {
                id:3,
                name: 'Chat 3',
                messages: [
                                
                                { name: 'Name3', content: 'Text3' }
                                
                ]
                },
            4: {
                id:4,
                name: 'Chat 4',
                messages: [
            
                                { name: 'Name4', content: 'Text4' }
                ]
                },
            5: {
                id:5,
                name: 'Chat 5',
                messages: [
                                
                                { name: 'Name5', content: 'Text5' }
                ]
                },

            }
        }

        render(){
            return this.state
        }
    }

   
   
   
   
   
   
   /*(<div className="Chat">
        <MessageField messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </div>);

Chat.propTypes = {
    
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}

*/