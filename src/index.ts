import app from './server';

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info('Express server started on port: ' + PORT);
});

export default app;
