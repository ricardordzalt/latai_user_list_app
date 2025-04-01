'use client';

import { useState } from 'react';


export default function SearchUserClient() {
    const [query, setQuery] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
    }

    return (
        <input
            type="text"
            placeholder="Buscar usuario..."
            value={query}
            onChange={handleChange}
            className="border p-2 w-full"
        />
    );
}
