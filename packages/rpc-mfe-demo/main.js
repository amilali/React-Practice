import { setupGlobalEventListener, createEventEmitter } from './src/core/eventEmitter.js';
import { rpc } from './src/core/registry.js';

// 1. Initialize the Core Platform (Shell)
// We attach the core utilities to a global namespace object strictly before any MFEs load
window.AppShell = {
    rpc: rpc,
    createEventEmitter: createEventEmitter
};

// Setup Global Event System Dashboard
document.addEventListener("DOMContentLoaded", async () => {
    const logContainer = document.getElementById("eventLogs");
    setupGlobalEventListener(logContainer);

    // 2. Dynamically import Micro-Frontends AFTER the shell is ready.
    // This simulates exactly how Webpack Module Federation asynchronously loads remote apps!
    const { initUserService } = await import('./src/apps/userService.js');
    const { initUiApp } = await import('./src/apps/uiApp.js');

    initUserService();
    initUiApp();
});
