import React from "react";
import RepoCard from "./RepoCard";

const RepoGrid = ({ repos = [], loading = false }) => {
  if (loading) {
    return (
      <div className="text-center py-10 opacity-70">
        Loading repositories...
      </div>
    );
  }

  if (!repos.length) {
    return (
      <div className="text-center py-10 opacity-70">No repositories found.</div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoGrid;
