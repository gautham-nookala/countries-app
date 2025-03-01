const ErrorState = ({ error }: { error: string }) => {
  return (
    <div className="container mx-auto p-4 text-center bg-app-bg">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    </div>
  );
};

export default ErrorState;
