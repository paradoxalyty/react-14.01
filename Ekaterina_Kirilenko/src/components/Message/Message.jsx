import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import "./Message.css";

export const Message = ({ author, content }) => {
  const classNames = classnames("message", { "message--robot": author === 'Робот' });
  // let date = new Date();
  // date = `${date.getUTCHours()}:${date.getUTCMinutes()}`;
  return (
    <div className={classNames}>
      <div className="author">{author}</div>
      <div className="content">{content}</div>
      {/* <div className="date">{date}</div> */}
    </div>
  );
}

Message.propTypes = {
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
};

// export default class Message extends React.Component {
//   static propTypes = {
//     name: PropTypes.string,
//     content: PropTypes.string.isRequired,
//   };
//   static defaultProps = {
//     name: 'Пользователь'
//   };

//   render() {
//     const Message = ({ name, content }) =>
//       <div>
//         <strong>{this.props.name}:</strong> {this.props.content}
//       </div>;
//     return <Message />
//   }
// }