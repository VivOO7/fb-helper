import React from 'react';

const ProfileCard = ({ photoUrl, name, userId }:{photoUrl: string, name: string, userId: string}) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden mx-auto m-6">
      <div className="px-4 py-2">
        <img className="h-48 w-full object-cover" src={photoUrl} alt="Profile" />
      </div>
      <div className="py-2 px-4">
        <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        <p className="py-2 text-lg text-gray-700">{userId}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
