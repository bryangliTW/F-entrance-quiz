import axios from 'axios';

const PATH = 'http://localhost:8080';

const getGroupApi = {
  getAll: async () => {
    const response = await axios.get(`${PATH}/members`);
    return response.data;
  },
  randomize: async () => {
    const response = await axios.get(`${PATH}/randomizing`);
    return response.data;
  },
  post: async (name) => {
    await axios.post(`${PATH}/add-member`, name);
  },
};

export default getGroupApi;
