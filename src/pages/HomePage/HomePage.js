import React from 'react';
import { Button, Stack } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>

      <Stack direction="horizontal" gap={2}>
        <Button variant="primary">Button as link</Button>
        <Button variant="success">Button as link</Button>
      </Stack>
    </div>
  );
};

export default HomePage;
