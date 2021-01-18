import { useState, useEffect, useDebugValue } from 'react';

export function useStatus(user) {
    const [status, setStatus] = useState(false);
    
    useEffect(() => {
        setStatus(user.status);
    }, [user.status]);

    useDebugValue(status ? 'Online' : 'Offline');
    return status;
}