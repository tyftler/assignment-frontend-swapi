import { Card, CardContent } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

interface Props {
  error?: Error;
}

export default function ErrorPage(props: Props) {
  const routeError = useRouteError();
  const error = props.error ?? routeError;

  console.error(error);

  let errorText = 'Unknown Error';
  if (isRouteErrorResponse(error)) {
    errorText = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorText = error.message;
  }

  return (
    <div className="error-page container">
      <Card>
        <CardContent>
          <h2>Error</h2>
          <p>Sorry, something went wrong.</p>
          <code>{errorText}</code>
        </CardContent>
      </Card>
    </div>
  );
}
