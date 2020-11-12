import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserService from "../services/UserService.js";
import userS from "../services/UserService";

const Home = () => {

  const [users, setUsers] = useState([]);
  const listUsers = users.map((user) =>
  <li key={user.id.toString()}>
    {user.firstName}
  </li>
);

  useEffect(() => {
    let config = {
      method: 'get',
      url: 'http://localhost:1812/api/users',
    };
    axios(config)
    .then(function (response) {
      setUsers(response.data);
    })
    .catch(function (error) {
    });
  },[])
  return (listUsers)
}
export default Home;