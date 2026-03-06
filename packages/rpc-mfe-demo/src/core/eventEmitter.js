/**
 * Event Emitter Module
 * Demonstrates the use of Currying for platform governance.
 * Allows the core platform team to inject metadata (like application IDs)
 * before feature teams use the function.
 */

// Curried function: takes sourceApp, returns function taking eventType, returns function taking payload
export function createEventEmitter(sourceApp) {
    return function (eventType) {
        return function (payload) {
            const event = {
                source: sourceApp,
                type: eventType,
                timestamp: new Date().toISOString(),
                payload: payload
            };

            // Dispatch real browser event
            window.dispatchEvent(
                new CustomEvent("mfe-event", { detail: event })
            );

            return event; // Returning merely for direct component testing/logging
        };
    };
}

// Global listener for UI rendering of logs
export function setupGlobalEventListener(logContainer) {
    window.addEventListener("mfe-event", (event) => {
        const { source, type, timestamp, payload } = event.detail;

        const div = document.createElement('div');
        div.className = 'log-entry';
        div.innerHTML = `
      <span class="log-time">[${new Date(timestamp).toLocaleTimeString()}]</span>
      <span class="log-source">[${source}]</span>
      <span class="log-type">${type}:</span>
      <span class="log-payload">${JSON.stringify(payload)}</span>
    `;

        // Auto-scroll to bottom
        logContainer.appendChild(div);
        logContainer.scrollTop = logContainer.scrollHeight;
    });
}
