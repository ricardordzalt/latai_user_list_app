'use client';

import { useGetUserNameFilterState } from 'src/state/hooks/user/use-get-user-name-filter-state';
import { useSetUserNameFilterState } from 'src/state/hooks/user/use-set-user-name-filter-state';

export default function SearchUserClient() {
  const { userNameFilter } = useGetUserNameFilterState();
  const {setUserNameFilterState} = useSetUserNameFilterState();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserNameFilterState(value);
  }

  return (
    <input
      type="text"
      placeholder="Buscar usuario..."
      value={userNameFilter}
      onChange={handleChange}
      className="border p-2 w-full"
    />
  );
}
