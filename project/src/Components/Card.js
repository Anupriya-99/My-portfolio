import React from 'react';

const Card = () => {
  return (
    <div className="w-96 h-full bg-white shadow-md rounded-md overflow-hidden">
      <img
        src="https://via.placeholder.com/300"
        alt="Card Image"
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo temporibus architecto voluptatibus nihil perferendis, quis odit et! Quidem, laboriosam quas sed tempora quia temporibus mollitia incidunt repudiandae a recusandae exercitationem asperiores aliquid consequuntur corrupti nobis illo impedit magnam officiis minus?</p>
        <div className="mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
