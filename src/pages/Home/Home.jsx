import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  useEffect(() => {
    toast.success('Welcome to iCount !');
  }, []);
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        {`
        This is the iCount App. Here you'll find a number counter.`}
      </p>
    </div>
  );
}
