import axios from 'axios';

export default {
    // Create new baby event
    createNewEvent: query => axios.post('/event', query),
};