import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import './ChatList.css';

const ChatList = (props) => {
    const chatList = props.chats;
    const { pathId } = props;
    const [name, setName] = useState ('NewChatName');

    const handleClick = () => {
        if (name.length > 0) {
            setName('');
        }
    };

    return (<div className="chatList">
        <ul>
            {Object.keys (chatList).map (id => 
                <li key={id} className={(+id === pathId ? 'li-current' : '') }>
                    <Link to={'/chats/' + id} className="chatRow">
                        {chatList[id].name}
                    </Link>
                </li>
            )}
        </ul>
        <div className="formAddNewChat">
            <TextField
                label="Новый чат"
                variant="outlined"
                size="small"
                value={name}
                onChange={({currentTarget: {value}}) => setName (value)}/>
            <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleClick}>
                    Добавить
            </Button>
        </div>
    </div>);
};
const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

export default connect (mapStateToProps) (ChatList);