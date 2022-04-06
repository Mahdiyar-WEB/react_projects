import axios from "axios";

const http = () => {
  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";

  const getContacts = () => {
    return axios.get("");
  };
  const addContacts = async (newContact) => {
    await axios.post("", newContact);
  };
  const deleteContacts = async (id) => {
    await axios.delete(`/${id}`);
  };
  const updateContact = async (id, newValue) => {
    await axios.put(`/${id}`, newValue);
  };

  return { getContacts, addContacts, deleteContacts, updateContact };
};

export default http;
