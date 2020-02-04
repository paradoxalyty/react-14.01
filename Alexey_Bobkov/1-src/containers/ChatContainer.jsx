import React, { Component } from 'react';
//import { Layout } from '../components/Layout/Layout.jsx';
import {addMessage, loadChats} from '../store/chatAction.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class ChatContainer extends Component {

//     state ={
//         chats: {
//             1:{
//                 id:1,
//                 name: 'Chat 1',
//                 messages: [
//                                 { name: 'Name1', content: 'Text1' }  
//                             ],
//                 },
//             2: {
//                 id:2,
//                 name: 'Chat 2',
//                 messages: [
//                                 { name: 'Name2', content: 'Text2' }
                                
//                 ]
//                 },
//             3: {
//                 id:3,
//                 name: 'Chat 3',
//                 messages: [
                                
//                                 { name: 'Name3', content: 'Text3' }
                                
//                 ]
//                 },
//             4: {
//                 id:4,
//                 name: 'Chat 4',
//                 messages: [
            
//                                 { name: 'Name4', content: 'Text4' }
//                 ]
//                 },
//             5: {
//                 id:5,
//                 name: 'Chat 5',
//                 messages: [
                                
//                                 { name: 'Name5', content: 'Text5' }
//                 ]
//                 },

//             }
//         }



    handleSendMessage = (id) => (message) => {
        this.props.addMessage(id, message.name, message.content);
//         this.setState((state) => ({chats: {...state.chats,
//             [id]: {name: state.chats[id].name,
//         messages: [...state.chats[id].messages, message,]},
// }
    // }
    // ));
}
    componentDidMount(){
        this.props.loadChats();
    }
    // componentDidUpdate(){
        
    //    const {chats} = this.state;
    //     const {id} = this.props.match.params;
    //     if(id && chats[id]){
    //         clearInterval(this.timerId);
    //         if (this.state.chats[id].messages[this.state.chats[id].messages.length-1].name != 'Robot' ){
    //             this.timerId=setTimeout(()=>
    //             this.handleSendMessage(id)({name: 'Robot', content: 'Chat - '+id+', dont touch me' }),2000);
    //         } else {
    //             var classrobot = document.getElementsByClassName('Message')[document.getElementsByClassName('Message').length-1];
    //             classrobot.className =  classrobot.className + ' Robot';
                
    //             }
        
    //              } 
    //     }

     render () {
        
        const {chats} = this.props;
        const {id} = this.props.match.params;
        if(id && chats[id]){
             return <Layout {...{messages: chats[id].messages, onSendMessage: this.handleSendMessage(id)}} />
        }

        
      }
};


const mapStateToProps = ({chatReducer}) => ({
       chats: chatReducer.chats
});


const mapDispatchToProps = ({}) => {
    return bindActionCreators( {loadChats, addMessage}, dispatch, )
};

export default connect(mapStateToProps, mapDispatchToProps,)(ChatContainer);