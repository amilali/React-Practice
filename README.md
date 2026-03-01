# React Practice Monorepo

This repository has been converted into a monorepo structure using **npm workspaces**. This setup allows you to manage multiple packages/projects within a single repository more efficiently.

## How it was created

1.  **Project Organization**: Created a `packages/` directory at the root level to house all individual projects.
2.  **Structuring Sub-projects**: Moved and flattened existing projects from nested directories into the `packages/` folder:
    *   `React-1/react-1` → `packages/react-1`
    *   `React-2/React-assignment-1` → `packages/react-assignment-1`
    *   `React-3/Demo` → `packages/react-3-demo`
    *   `React-4/project1` → `packages/react-4-project1`
    *   `React-5/demo` → `packages/react-5-demo`
    *   `React-6/dashboard` → `packages/react-6-dashboard`
    *   `Tac-tic-toe/Tac-tic-toe game` → `packages/tac-tic-toe`
    *   `typescript` → `packages/typescript`
    *   `RandomGen` → `packages/random-gen`
    *   `signarture-stroke` → `packages/signature-stroke`
    *   `Create_React_Using_cdn` → `packages/react-cdn-demo`
3.  **Monorepo Initialization**: Created a root `package.json` with the following configuration:
    ```json
    {
      "name": "react-practice-monorepo",
      "private": true,
      "workspaces": [
        "packages/*"
      ]
    }
    ```
4.  **Cleanup**: Removed the empty legacy parent directories.

## Advantages of this setup

*   **Shared Dependencies**: You can install dependencies for all projects at once using `npm install` from the root.
*   **Centralized Management**: Run scripts across all packages or specific ones from the root (e.g., `npm run dev --workspace=@your/package-name`).
*   **Cleaner Architecture**: Everything is logically grouped under `packages/`.

## Getting Started

To install dependencies for all projects:
```bash
npm install
```

To run a specific project (if it has a start script):
```bash
npm run start --workspace=packages/<package-dir-name>
```