/**
 * User Service Micro-Frontend
 * Registers RPC methods and emit domain events using curried functions.
 */

// 1. DYNAMIC INJECTION: Consume Core services from the Global Runtime Namespace
// No relative paths are used - this app is fully decoupled!
const { rpc, createEventEmitter } = window.AppShell;

// Setup Curried Event Emitter explicitly for this App context
const emitUserEvent = createEventEmitter("UserService");

// Pre-configure specific event types using currying:
const notifyUserCreated = emitUserEvent("USER_CREATED");
const notifyUserFetched = emitUserEvent("USER_FETCHED");


// 2. Closure Example - encapsulated private database
function createUserService() {
    const database = {
        1: { name: "John Doe", role: "Admin" },
        2: { name: "Sarah Smith", role: "Editor" }
    };

    return {
        getUser: (id) => {
            // Accessing private database through closure
            const user = database[id];
            if (user) {
                // Emit curated event
                notifyUserFetched(user);
                return user;
            }
            return { error: "User not found" };
        },
        createUser: (userData) => {
            const newId = Object.keys(database).length + 1;
            database[newId] = userData;
            notifyUserCreated({ id: newId, ...userData });
            return { success: true, id: newId };
        }
    };
}

// 3. Initialize the service singleton and register its methods in the RPC registry
export function initUserService() {
    const service = createUserService();

    // The platform consumes this MFE's procedures by registering them in the RPC router mapping
    rpc.register("RP://getUser", (payload) => {
        return service.getUser(payload.id);
    });

    rpc.register("RP://createUser", (payload) => {
        return service.createUser(payload);
    });

    console.log("UserService initialized and RPC endpoints registered.");
}
