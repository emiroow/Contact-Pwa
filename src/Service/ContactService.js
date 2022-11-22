import axios from "axios";
const Endpoint = "http://localhost:9000/";

export const GetContacts = () => {
  const Url = `${Endpoint}Contacts`;
  return axios.get(Url);
};

export const getContact = (contactID) => {
  const Url = `${Endpoint}Contacts/${contactID}`;
  return axios.get(Url);
};

export const GetAllGroups = () => {
  const Url = `${Endpoint}Groups`;
  return axios.get(Url);
};

export const GetGroup = (GroupId) => {
  const Url = `${Endpoint}Groups/${GroupId}`;
  return axios.get(Url);
};

export const CreatNewContact = (contact) => {
  const Url = `${Endpoint}Contacts`;
  return axios.post(Url, contact);
};

export const UpdateContact = (contactID, contact) => {
  const url = `${Endpoint}contacts/${contactID}`;
  return axios.put(url, contact);
};

export const DeleteContact = (contactID) => {
  const Url = `${Endpoint}Contacts/${contactID}`;
  return axios.delete(Url);
};

