import { useAuth } from '@/auth';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
 
export const Route = createFileRoute('/_auth/update-password')({
  component: UpdateEmailComponent
})

function UpdateEmailComponent() {
  // const { changeEmail, verifyAndUpdateEmail } = useAuth();
  const { changeEmail } = useAuth();
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleChangeEmail = async () => {
    try {
      await changeEmail(newEmail, currentPassword);
      // Or use verifyAndUpdateEmail if you want to verify the email before updating
      // await verifyAndUpdateEmail(newEmail, currentPassword);
    } catch (error) {
      console.error('Error changing email:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="New Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <button onClick={handleChangeEmail}>Change Email</button>
    </div>
  );
};

