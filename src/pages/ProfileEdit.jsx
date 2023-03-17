import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
