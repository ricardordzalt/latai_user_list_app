import SearchUserClient from "./search-user-client";

export default async function UsersPage({ searchParams = {} }: { searchParams: { name?: string } }) {
    const { name='' } = searchParams;
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
        // Forces SSR on each request
        cache: 'no-store',
    });


    if (!usersResponse.ok) {
        throw new Error('Failed to fetch users');
    }
    const users = await usersResponse.json();
    ;

    return (
        <main className="p-4">
            <h1>Usuarios</h1>
            <SearchUserClient/>
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </main>
    );
}


