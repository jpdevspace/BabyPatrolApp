import axios from 'axios';

export default {
    // Create new baby event
    createNewEvent: query => axios.post('/event', query),
    // Get last event
    getLastEvent: query => axios.get(`/event/last/${query.type}`),
    // Get last five days of events
    getLastFiveDays: () => axios.get('/events/5')
};