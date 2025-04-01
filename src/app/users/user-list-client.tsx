'use client';

import { TableBody, TableCell, TableContainer, TableHead, TableRow } from 'src/components/table';
import { useGetUserNameFilterState } from 'src/state/hooks/user/use-get-user-name-filter-state';
import { User, Users } from 'src/types/user';

interface UserListClientProps {
  users: Users;
}

const columns = [
  { label: 'Name' },
  { label: 'Email' },
  { label: 'Phone' },
  { label: 'Company' },
];

export default function UserListClient({ users: originalUsers = [] }: UserListClientProps) {
  const { userNameFilter } = useGetUserNameFilterState();
  const users = originalUsers.filter(originalUser =>
    originalUser.name?.toLocaleLowerCase()?.includes(
      userNameFilter?.toLocaleLowerCase()
    ));

  const onUserRowClick = (userId: number) => {
    console.log(userId);
  };
  
  return (
    <div className='my-8'>
      <TableContainer>
        <TableHead columns={columns} />
        <TableBody>
          {users.map((user: User) => (
            <TableRow key={user.id} onClick={() => onUserRowClick(user?.id)}>
              <TableCell isFirst>{user.name || ''}</TableCell>
              <TableCell>{user.email || ''}</TableCell>
              <TableCell>{user.phone || ''}</TableCell>
              <TableCell isLast>{user.company?.name || ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
}

