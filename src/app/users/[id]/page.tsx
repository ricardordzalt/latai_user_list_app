import { notFound } from 'next/navigation';
import { CardContainer } from './card-container';
import { UserCard } from './user-card';

interface UserDetailsProps {
    params: {
        id: string
    };
}

export default async function UserDetails({ params }: UserDetailsProps) {
  const userId = params?.id || 0;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    next: { revalidate: 60 }, // ISR opcional
  });

  if (!res.ok) return notFound();

  const user = await res.json();

  return (
    <CardContainer>
      <UserCard user={user}/>
    </CardContainer>
  );
}
