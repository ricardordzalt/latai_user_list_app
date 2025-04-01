import { Users } from 'src/types/user';

const getUsers = async ({ withSSR = false }: { withSSR?: boolean } = {}, onError: () => void): Promise<Users> => {
  const cacheOption = withSSR ? 'no-store' : 'force-cache';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: cacheOption,
    });

    if (!response.ok) {
      onError();
    };

    const users: Users = await response.json();
    return users;
  } catch {
    throw new Error('Could not load users');
  }
};

export { getUsers };
