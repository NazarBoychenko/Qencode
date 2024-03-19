import { useState } from 'react';
import axios from '../api/axios.js';

export default function usePOST() {
    const [response, setResponse] = useState({
        answer: {},
        errors: '',
    });

    const putData = async (url, objectData) => {
        try {
            const data = await axios.post(url, objectData);
            setResponse(prevData => ({ ...prevData, answer: data }));
        } catch (error) {
            setResponse(prevData => ({ ...prevData, errors: error }));
        }
    };

    return [response, putData];
}
