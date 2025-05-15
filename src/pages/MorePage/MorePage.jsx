import React from "react";

export const MorePage = () => {
  return (
    <div className="container">
      <h1 className="headline">Info</h1>
      <div className="subheader info">
        <br />

        <h3>🎬 About the Project</h3>
        <p>
          This website is a personal movie library built as part of my portfolio
          and a way to explore modern web development technologies. I’ve always
          wanted to create a large-scale project — something bigger than a
          typical pet project — to truly challenge myself and grow as a
          developer.
        </p>
        <p>
          The idea was to build a user-friendly platform for browsing and
          discovering films using the TMDB API. Over time, I plan to expand it
          with social features, reviews, and more interactive elements.
        </p>
        <br />
        <br />

        <h3>👩‍💻 About Me</h3>
        <p>
          Hi there! I'm a beginner front-end developer who’s passionate about
          building modern, interactive, and clean web applications. This project
          was a big step in my learning journey and helped me practice
          everything I’ve studied so far — from basic layout to advanced state
          management.
        </p>
        <p>During development, I learned how to:</p>
        <ul>
          <li>Work efficiently with Redux Toolkit and RTK Query</li>
          <li>Fetch and manage data from external APIs</li>
          <li>Handle protected routes and JWT-based authentication</li>
          <li>Create responsive UI with theme switching and animation</li>
          <li>Structure a scalable React project</li>
        </ul>
        <br />
        <br />

        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Frontend: React, Redux Toolkit, React Router, Axios</li>
          <li>API: TMDB (The Movie Database)</li>
          <li>State management: RTK Query</li>
          <li>Theme & Session storage: localStorage</li>
          <li>Styling: MUI</li>
          <li>Auth: JWT, Protected Routes</li>
          <li>Other: Responsive layout, Modals, Light/Dark Theme</li>
        </ul>
        <br />
        <br />

        <h3>💡 Purpose & Benefits</h3>
        <p>
          This site isn’t just about watching trailers — it’s meant to be
          useful:
        </p>
        <ul>
          <li>Easily discover trending, upcoming, or top-rated films</li>
          <li>Save favorite movies for later</li>
          <li>Get inspiration for movie nights</li>
          <li>(In future) Leave reviews and join discussions</li>
        </ul>
        <p>
          My goal is to make a product-like, user-friendly movie platform — not
          commercial, but designed as if it could be.
        </p>
        <br />
        <br />

        <h3>📈 Roadmap / What’s Coming Next</h3>
        <ul>
          <li>Actor pages and filmographies</li>
          <li>User reviews and personal ratings</li>
          <li>Create and share personal movie lists</li>
          <li>Google OAuth login</li>
          <li>Real-time chat or forum</li>
          <li>User roles (admin/moderator/user)</li>
          <li>Backend: Node.js + MySQL or Firebase</li>
          <li>Deploy as a PWA (installable app)</li>
        </ul>
        <br />
        <br />

        <h3>📫 Contact</h3>
        <p>
          If you have any feedback, ideas, or spot a bug — feel free to reach
          out!
        </p>
        <p>
          Email:
          <a href="mailto:memocontent@gmail.com" target="_blank">
            memocontent@gmail.com
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/TheYull" target="_blank">
            https://github.com/TheYull
          </a>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};
