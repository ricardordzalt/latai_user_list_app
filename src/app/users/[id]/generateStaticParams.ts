import { User } from 'src/types/user';

// static site generation
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  const usersIds =users?.map((user: User) => ({
    id: user?.id?.toString?.(),
  }));
  return usersIds;
}
