import { notFound } from 'next/navigation';
import { CardContainer } from './card-container';
import { UserCard } from './user-card';
import { getUser } from 'src/services/users/get-user';

type UserDetailsProps = {
  params: Promise<{ id: string }>
};

export default async function UserDetails({ params }: UserDetailsProps) {
  const { id } = await params;
  const onError = () => {
    return notFound();
  };
  const user = await getUser({ userId: id }, onError);

  return (
    <CardContainer>
      <UserCard user={user} />
    </CardContainer>
  );
}
