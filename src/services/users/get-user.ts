import { User } from 'src/types/user';

const getUser = async ({ userId }: { userId: string | number }, onError: () => void): Promise<User> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      onError();
    }

    const user: User = await response.json();
    return user;
  } catch {
    throw new Error('Could not load user');
  }
};

export { getUser };
