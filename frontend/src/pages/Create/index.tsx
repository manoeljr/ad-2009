import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container, TableContainer } from './styles';

function Create() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleAddFriend(e: FormEvent) {
    e.preventDefault();
    api.post('/friends', {
      name,
      email,
      friend: ''
    });
    history.push('/');
  }

  return(
    <>
      <Header />
        <Container>
        <TableContainer>
          <form onSubmit={handleAddFriend}>
            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input value={name} onChange={(e) => { setName(e.target.value)}} type="text" id="name"  />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input value={email} onChange={(e)=> { setEmail(e.target.value)}} type="text" id="email" />
            </div>
            
          <button type="submit"><FiUser size={25} />Create</button>
        </form>  
        </TableContainer>
        </Container>
    </>
  );
}

export default Create;