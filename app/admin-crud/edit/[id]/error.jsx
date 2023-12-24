"use client";

const error = () => {
  const hndleRefresh = () => {
    window.location.reload();
  };
  return (
    <div>
      <h1>There is a data fetching error</h1>
      <p>
        Please <button onClick={hndleRefresh}>Refresh</button> the page
      </p>
    </div>
  );
};

export default error;
