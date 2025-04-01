'use client';

import { useGetUserNameFilterState } from 'src/state/hooks/user/use-get-user-name-filter-state';
import { User, Users } from 'src/types/user';

interface UserListClientProps {
  users: Users;
}

export default function UserListClient({ users: originalUsers = [] }: UserListClientProps) {
  const { userNameFilter } = useGetUserNameFilterState();
  const users = originalUsers.filter(originalUser =>
    originalUser.name?.toLocaleLowerCase()?.includes(
      userNameFilter?.toLocaleLowerCase()
    ));
  return (

    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

