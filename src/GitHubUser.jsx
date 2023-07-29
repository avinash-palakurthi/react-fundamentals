import React from "react";
import useGitHub from "./hooks/useGitHub";

const GitHubUser = ({ username }) => {
  const { user, loading, error } = useGitHub(username);

  return (
    <div className="github-user">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {user && (
        <ul className="details">
          {/* User-Avatar */}
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>

          {/* User-Name */}

          <li>
            <strong>Name:</strong>
            {user.name}
          </li>

          {/* User-Bio */}

          <li>
            <strong>Bio:</strong>
            {user.bio ? user.bio : "NA"}
          </li>

          {/* User-Location */}

          <li>
            <strong>Location:</strong>
            {user.location ? user.location : "NA"}
          </li>

          {/* User-Blog (or)  Site */}
          <li>
            <strong>Blog or Site</strong>
            {user.blog ? user.blog : "NA"}
          </li>

          {/* Public Repos */}
          <li>
            <strong>Public Repos</strong>
            {user.public_repos ? user.public_repos : 0}
          </li>

          {/* Followers */}

          <li>
            <strong>Followers:</strong>
            {user.followers ? user.followers : 0}
          </li>

          {/* Following*/}

          <li>
            <strong>Following:</strong>
            {user.following ? user.following : 0}
          </li>
        </ul>
      )}
    </div>
  );
};

export default GitHubUser;
