import React from 'react';
import avatar from './assets/male_avatar.jpeg'

export const SampleComponent = function() {
  return (
    <h2 className={'saludo'}>Hi there</h2>
  )
}

export const SampleComponentWithProps = function(props) {
  return (
    <div>
      <h2 className={'saludo'}>Hola, {props.name}</h2>
      <p>Bienvenido</p>
    </div>
  )
}

export const formatName = function(user) {
  return user.firstName + ' ' + user.lastName;
}

export const CommentProps = {
  author: {
    avatarUrl: avatar ,
    name: 'James'
  },
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  date: new Date(),
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}