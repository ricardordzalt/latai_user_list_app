import { notFound } from 'next/navigation';
import { CardContainer } from './card-container';
import { UserCard } from './user-card';
import { getUser } from 'src/services/users/get-user';

interface UserDetailsProps {
  params: {
    id: string
  };
}

export default async function UserDetails({ params }: UserDetailsProps) {
  const userId = params?.id || 0;
  const onError = () => {
    return notFound();
  };
  const user = await getUser({ userId }, onError);

  return (
    <CardContainer>
      <UserCard user={user} />
    </CardContainer>
  );
}
