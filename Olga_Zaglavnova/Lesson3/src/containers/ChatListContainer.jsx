import React, {Component} from "react";
import {ChatList} from '../components/ChatList/ChatList';
import {bindActionCreators} from "redux";
import {loadChats} from "../store/chatAction";
import {connect} from "react-redux";

class ChatListContainer extends Component {}

const mapStateToProps=({chatReducer})=>{
    return {
        chats: chatReducer.chats,
    }
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats}, dispatch)
};

const mergeProps =(stateProps, dispatchProps, props) => {
    return {
        ...stateProps
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);