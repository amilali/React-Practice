/**
 * UI Application Micro-Frontend
 * Interacts with the interface, calls RPC methods, and listens to Global Events.
 */

// DYNAMIC INJECTION: Consume Core services from the Global Runtime Namespace
const { rpc, createEventEmitter } = window.AppShell;

// Setup curried event emitter for the UI App context
const emitUiEvent = createEventEmitter("UiApp");
const logUiAction = emitUiEvent("ACTION_TRIGGERED");

export function initUiApp() {
    const fetchBtn = document.getElementById("fetchUserBtn");
    const createBtn = document.getElementById("createUserBtn");
    const resultBox = document.getElementById("rpcResult");
    const userIdInput = document.getElementById("userIdInput");

    // Call the getUser RPC procedure when Fetch button is clicked
    fetchBtn.addEventListener("click", () => {
        const id = parseInt(userIdInput.value);

        // Using the curried emitter
        logUiAction({ action: "Clicked Fetch User", inputId: id });

        try {
            // The RP call: decoupling UI app from User Service!
            const user = rpc.call("RP://getUser", { id });

            resultBox.textContent = JSON.stringify(user, null, 2);
            resultBox.style.color = user.error ? 'var(--text-muted)' : 'var(--success)';

        } catch (err) {
            resultBox.textContent = err.message;
            resultBox.style.color = '#ef4444'; // Red for errors
        }
    });

    // Call the createUser RPC procedure when Create button is clicked
    createBtn.addEventListener("click", () => {
        // Random user data generator
        const newName = `User_${Math.floor(Math.random() * 1000)}`;
        const newRole = ["Viewer", "Contributor", "Admin"][Math.floor(Math.random() * 3)];

        // Using the curried emitter
        logUiAction({ action: "Clicked Create User", newName });

        try {
            const result = rpc.call("RP://createUser", { name: newName, role: newRole });

            resultBox.textContent = JSON.stringify(result, null, 2);
            resultBox.style.color = 'var(--success)';

        } catch (err) {
            resultBox.textContent = err.message;
            resultBox.style.color = '#ef4444';
        }
    });

    console.log("UiApp initialized and DOM listeners attached.");
}
