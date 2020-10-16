import React, { useState, useEffect } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import { Container, TableContainer } from './styles';

interface Friend {
  id: string;
  name: string;
  email: string;
  friend?: string;
}

function Dashboard() {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
      api.get('/friends').then(response => {
        setFriends(response.data);
      });
  }, []);

  async function handleEditFriend(id: string): Promise<void> {
    try {
     api.put(`/friends/:${id}`, {
       // Falta desenvolver.
     }); 
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFriend(id: string): Promise<void> {
    try {
      api.delete(`/friends/${id}`);
      const amigo = friends.filter(friend => friend.id !== id);
      setFriends(amigo);
    } catch (err) {
      console.log(err);
    }
  }

    return (
        <>
          <Header />
          <Container>
            <TableContainer>
              <table>
                <thead>
                  <tr>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>AMIGO SECRETO</th>
                    <th>AÇÕES</th>
                  </tr>
                </thead>
    
                <tbody>
                  {friends.map(friend => (
                    <tr key={friend.id}>
                      <td>{friend.name}</td>
                      <td>{friend.email}</td>
                      <td>{friend.friend}</td>
                      <td>
                        <button className="icon" onClick={() => handleEditFriend(friend.id)}><FiEdit3  size={20} /></button>
                        <button className="icon" onClick={() => handleDeleteFriend(friend.id)}><FiTrash  size={20} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </Container>
        </>
    );
}

export default Dashboard;