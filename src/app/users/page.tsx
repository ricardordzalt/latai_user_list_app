import SearchUserClient from './search-user-client';
import UserListClient from './user-list-client';
import { ActionButtons } from './action-buttons';
import { getUsers } from 'src/services/users/get-users';
import { notFound } from 'next/navigation';

export default async function UsersPage() {
  const onError = () => {
    return notFound();
  };
  const users = await getUsers({ withSSR: true }, onError);

  return (
    <main className="p-4">
      <h1>Usuarios</h1>
      <SearchUserClient/>
      <ActionButtons/>
      <UserListClient users={users}/>
    </main>
  );
}

