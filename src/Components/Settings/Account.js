import React, { useState } from 'react';
import { useForm } from '../../utils/customHooks';
import { UPDATE_USER } from '../../Queries/Queries';
import { useMutation } from '@apollo/client';

const Account = ({ data: { getUser } }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const { handleInputChange, handleSubmit, val } = useForm(
    updateUser,
    {
      id: getUser.id || '',
      name: getUser.name || '',
      email: getUser.email || '',
      photo: '',
    },
  );

  console.log(val);

  const [userUpdate, { loading }] = useMutation(UPDATE_USER, {
    update: (_, result) => {
      console.log(result);
      setToggle(!toggle);
    },
    onError: err => {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  function updateUser() {
    userUpdate({
      variables: {
        ...val,
      },
    });
  }

  // console.log(getUser.createdAt.split('T')[1].split('.'));
  return (
    <div className="container">
      <div className="row pb-4">
        <div className="col-10">
          <h5>Personal Information</h5>
        </div>
        <div className="col-2">
          <button className="edit-profile-btn" onClick={handleClick}>
            {!toggle ? 'edit' : 'cancel'}
          </button>
        </div>
      </div>
      {!toggle ? (
        <div className="account-wrapper">
          <div className="row pb-4">
            <div className="col-12">
              <span className="pr-5">Photo</span>
              <div className="profile-photo">
                <img src={getUser.photo} alt="profile-img" />
              </div>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-12">
              <span className="pr-5">Name</span>
              {getUser.name}
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-12">
              <span className="pr-5">Email</span>
              {getUser.email}
            </div>
          </div>
        </div>
      ) : (
        <div className="edit-form">
          <form onSubmit={handleSubmit}>
            <div className="row pb-4">
              <div className="col-12">
                <span className="pr-5">Photo</span>
                <div className="profile-photo">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <span className="pr-5">Name</span>
                <input
                  type="text"
                  name="name"
                  value={val.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <span className="pr-5">Email</span>
                <input
                  type="email"
                  name="email"
                  value={val.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Account;
