'use client';

import Image from 'next/image';
import { useGetUsersSortingState } from 'src/state/hooks/user/use-get-users-sorting-state';
import { useSetUsersSortingState } from 'src/state/hooks/user/use-set-users-sorting-state';

const ActionButtons = () => {
  const { setUsersSortingState } = useSetUsersSortingState();
  const { usersSorting } = useGetUsersSortingState();

  const handleClickSort = () => {
    if (usersSorting === 'asc') {
      setUsersSortingState('desc');
    } else {
      setUsersSortingState('asc');
    }
  };

  return (
    <div className="my-9 flex justify-end cursor-pointer dark:invert hover:opacity-80" onClick={handleClickSort}>
      <Image src="sort-icon.svg" width={32} height={32} alt="Sort users" />
    </div>
  );
};

export { ActionButtons };