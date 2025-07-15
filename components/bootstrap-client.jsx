'use client';

import { useEffect } from 'react';

export function BootstrapClient() {
    useEffect(() => {
        // Import Bootstrap JavaScript only on the client side
        import('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return null;
}
