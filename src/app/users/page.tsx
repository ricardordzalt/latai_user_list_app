import { Users } from 'src/types/user';
import SearchUserClient from './search-user-client';
import UserListClient from './user-list-client';

export default async function UsersPage() {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
    // Forces SSR on each request
    cache: 'no-store',
  });

  if (!usersResponse.ok) {
    throw new Error('Failed to fetch users');
  }
  const users: Users = await usersResponse.json();

  return (
    <main className="p-4">
      <h1>Usuarios</h1>
      <SearchUserClient/>
      <UserListClient users={users}/>
    </main>
  );
}

