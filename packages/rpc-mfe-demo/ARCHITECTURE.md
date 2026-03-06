# Micro-Frontend Architecture Flow

This document explains the core principles and flow of the Micro-Frontend (MFE) architecture demonstrated in this project.

## Overall Architecture Flow

1. **Platform Initialization (`main.js`)**: The host application (Shell) boots up first. It initializes the core utilities (RPC Registry and Event Emitter) and attaches them to the global standard Window object (`window.AppShell`).
2. **Global Event Listener (`main.js`)**: The shell sets up a global event listener on the browser's `window` object to capture any custom events (`mfe-event`) emitted by the micro-frontends. This acts as our centralized logging and telemetry system.
3. **MFE Initialization (`userService.js`, `uiApp.js`)**: The distinct micro-frontends initialize. Because the shell is completely initialized, the MFEs fetch their needed communication tools directly from the global `window.AppShell` object. This ensures they don't have hardcoded import paths back to the shell source code.
4. **RPC Registration (`userService.js`)**: The User Service MFE registers its available procedures (e.g., `RP://getUser`, `RP://createUser`) into the global RPC registry. The internal logic and database of the User Service are kept completely private via **Closures**.
5. **Procedure Invocation (`uiApp.js`)**: When a user interacts with the UI (e.g., clicks the "Fetch User" button), the UI App MFE explicitly calls the RPC registry asking to execute the path `RP://getUser`.
6. **Execution and Event Emission**: The RPC registry dynamically routes the call to the actual User Service handler. The User Service processes the request and subsequently emits a curried domain event (e.g., `USER_FETCHED`) back to the global event listener, before finally returning the requested data to the UI App.

---

## Technical Design Decisions Explained

### 1. Why do we use the Global Namespace Object (`window.AppShell`)?
In enterprise micro-frontend architectures, individual MFEs are typically built, deployed, and hosted independently (often using tools like Webpack Module Federation or Single-SPA). 
- **Decoupling**: If an MFE uses a static relative import (e.g., `import { rpc } from '../core/registry'`), Webpack will attempt to bundle that core code directly into the MFE itself during the build pipeline. If the file doesn't exist locally, the build fails.
- **Runtime Integration**: By injecting shared dependencies (like `rpc` and `createEventEmitter`) into a global namespace object (like `window.AppShell`), MFEs can fetch and interact with the tools dynamically at **runtime**.
- **Versioning Control**: When the core platform team updates a tool inside the platform shell, every independent MFE instantly runs the newest version upon page refresh, without needing its repository to be recompiled!

### 2. Why do we use RPC (Remote Procedure Calls)?
When building completely isolated MFEs, one MFE often needs data that another MFE owns. 
- **Simulating APIs**: The internal RPC registry pattern acts like an internal network router. `uiApp` simply requests the path `"RP://getUser"`. It doesn't know *who* resolves it, *where* it sits in the codebase, or *how* it works. 
- **Synchronous (Request/Response)**: While events are asynchronous "fire-and-forget" broadcasts, RPC is specifically designed for point-to-point data fetching (e.g., intentionally requesting a user profile and waiting for the payload before rendering a Vue or React dashboard chunk).

### 3. Why do we use Event Emitters (with Currying)?
While RPC handles direct point-to-point data requests, Event Emitters gracefully handle asynchronous broadcast announcements and structural telemetry.
- **Asynchronous & Decoupled**: When `UserService` creates a new user, it shouldn't have to manually execute functions inside `uiApp` or the `logger` interface. It simply shouts: *"A user was created!"* via a dispatch event. Any other independent MFE that cares can passively listen for it.
- **Currying for Platform Governance**: The platform natively dictates the `createEventEmitter` function using strict **Currying** (`createEventEmitter(appName)(eventName)(payload)`). This structurally forces every MFE to identify itself before it can dispatch an event!
When an feature developer simply types `notifyUserCreated({ id: 1 })`, the platform has *already* enforced that the event will correctly include the application name ("UserService"), a standardized timestamp layer, and a predictable payload format. This guarantees completely consistent telemetry across potentially dozens of scattered frontend teams!
