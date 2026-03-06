/**
 * RPC Registry Module
 * Demonstrates the use of Closures to encapsulate private state (the registry object)
 * and providing a public API (register, call) for Micro-Frontends.
 */

function createRpcRegistry() {
  // Private variable kept alive by closure
  const registry = {};

  return {
    register: (path, handler) => {
      if (registry[path]) {
        console.warn(`[Registry] Overwriting existing handler for ${path}`);
      }
      registry[path] = handler;
      console.log(`[Registry] Registered path: ${path}`);
    },
    
    call: (path, payload) => {
      console.log(`[Registry] Calling path: ${path} with payload:`, payload);
      if (!registry[path]) {
        throw new Error(`Handler not found for path: ${path}`);
      }
      return registry[path](payload);
    }
  };
}

// Export a singleton registry for all MFEs
export const rpc = createRpcRegistry();
