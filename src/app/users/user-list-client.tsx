'use client';

import { useRouter } from 'next/navigation';
import { Fragment, useMemo } from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from 'src/components/table';
import { useGetExpandedUserIdState } from 'src/state/hooks/user/use-get-expanded-user-id-state';
import { useGetUserNameFilterState } from 'src/state/hooks/user/use-get-user-name-filter-state';
import { useGetUsersSortingState } from 'src/state/hooks/user/use-get-users-sorting-state';
import { useSetExpandedUserIdState } from 'src/state/hooks/user/use-set-expanded-user-id-state';
import { User, Users } from 'src/types/user';

interface UserListClientProps {
  users: Users;
}

const columns = [
  { label: 'Name' },
  { label: 'Email' },
  { label: 'Phone' },
  { label: 'Company' },
  { label: 'Expand' },
];

export default function UserListClient({ users: originalUsers = [] }: UserListClientProps) {
  const { usersSorting } = useGetUsersSortingState();
  const { expandedUserId } = useGetExpandedUserIdState();
  const { setExpandedUserIdState } = useSetExpandedUserIdState();
  const router = useRouter();
  const { userNameFilter } = useGetUserNameFilterState();
  const users = useMemo(() => {
    let filtered = originalUsers.filter(user =>
      user?.name?.toLowerCase()?.includes(userNameFilter?.toLowerCase?.() ?? '')
    );

    if (usersSorting === 'asc') {
      filtered = [...filtered].sort((a, b) => a.name?.localeCompare(b.name));
    } else if (usersSorting === 'desc') {
      filtered = [...filtered].sort((a, b) => b.name?.localeCompare(a.name));
    }

    return filtered;
  }, [originalUsers, userNameFilter, usersSorting]);

  const handleUserRowClick = (userId: number) => {
    router.push(`/users/${userId}`);
  };

  const handleExpandUserRow = (userId: number) => {
    if (expandedUserId === userId) {
      setExpandedUserIdState(null);
    } else {
      setExpandedUserIdState(userId);
    }
  };

  return (
    <div className='my-8'>
      <TableContainer>
        <TableHead columns={columns} />
        <TableBody>
          {users?.map((user: User) => (
            <Fragment key={user?.id}>
              <TableRow onClick={() => handleUserRowClick(user?.id)}>
                <TableCell isFirst>{user?.name || ''}</TableCell>
                <TableCell>{user?.email || ''}</TableCell>
                <TableCell>{user?.phone || ''}</TableCell>
                <TableCell >{user?.company?.name || ''}</TableCell>
                <TableCell isLast>
                  <button
                    className="ml-4 underline cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExpandUserRow(user?.id);
                    }}
                  >
                    {expandedUserId === user.id ? 'Hide details' : 'Show details'}
                  </button>
                </TableCell>
              </TableRow>

              {expandedUserId === user?.id && (
                <TableRow key={`details-${user.id}`}>
                  <TableCell>
                    <strong className='px-9'>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </TableContainer>
    </div>
  );
}

