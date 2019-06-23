import axios from 'axios';

export default {
    // Create new baby event
    createNewEvent: query => axios.post('/event', query),
    // Get last event
    getLastEvent: query => axios.get(`/lastEvent/${query.type}`),
};