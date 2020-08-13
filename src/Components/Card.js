import React from "react";

const Card = ({ users }) => {
  return (
    <>
      {
        users.map(user => (
          <div key={user.id} className='bg-light-green center dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${user.id}?200x200`} alt="robot images" />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>))
      }
    </>
  );
}

export default Card;