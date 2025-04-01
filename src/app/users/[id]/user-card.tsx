import { User } from 'src/types/user';

// label
const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-gray-900 dark:text-white">{children}:</span>
);

// field info
interface FieldProps {
  label: string;
  children: React.ReactNode;
}

const Field = ({ label, children }: FieldProps) => (
  <div className="text-sm text-gray-700 dark:text-gray-300">
    <FieldLabel>{label}</FieldLabel> {children}
  </div>
);

// user card
interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        User Details
      </h2>
      <div className="space-y-3 text-left text-sm text-gray-700 dark:text-gray-300">
        <Field label="Name">{user.name}</Field>
        <Field label="Username">{user.username}</Field>
        <Field label="Email">{user.email}</Field>
        <Field label="Address">
          {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </Field>
        <Field label="Geolocation (lat/lng)">
          {user.address.geo.lat}, {user.address.geo.lng}
        </Field>
        <Field label="Phone">{user.phone}</Field>
        <Field label="Website">{user.website}</Field>
        <Field label="Company">{user.company.name}</Field>
        <Field label="Company Catch Phrase">{user.company.catchPhrase}</Field>
        <Field label="Company Business Speak">{user.company.bs}</Field>
      </div>
    </section>
  );
};
