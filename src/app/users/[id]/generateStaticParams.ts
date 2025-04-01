import { getUsers } from 'src/services/users/get-users';
import { User } from 'src/types/user';

// static site generation
export async function generateStaticParams() {
  const onError = () => {
    return [];
  };
  const users = await getUsers({}, onError);
  const usersIds = users?.map((user: User) => ({
    id: user?.id?.toString?.(),
  }));
  return usersIds;
}
