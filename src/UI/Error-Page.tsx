import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
    const error = useRouteError() as { status?: number, statusText?: string, message?: string };  console.error(error);

  return (
    <section id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}:  
        <i>{" " + error.statusText || error.message}</i>
      </p>

      
      {/* Make sure to implement route link going back to the exact point you left */}
      <button className='btn'>Go back</button>
    </section>
  );
};

export default ErrorPage;