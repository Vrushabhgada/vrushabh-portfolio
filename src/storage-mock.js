// Storage mock for local/production environment
// This replaces Claude.ai's window.storage API

const StorageMock = {
    async get(key) {
      try {
        const value = localStorage.getItem(key);
        if (!value) {
          throw new Error('Key not found');
        }
        return { key, value, shared: false };
      } catch (error) {
        throw error;
      }
    },
  
    async set(key, value) {
      try {
        localStorage.setItem(key, value);
        return { key, value, shared: false };
      } catch (error) {
        console.error('Storage set error:', error);
        return null;
      }
    },
  
    async delete(key) {
      try {
        localStorage.removeItem(key);
        return { key, deleted: true, shared: false };
      } catch (error) {
        console.error('Storage delete error:', error);
        return null;
      }
    },
  
    async list(prefix = '', shared = false) {
      try {
        const keys = Object.keys(localStorage).filter(k => 
          prefix ? k.startsWith(prefix) : true
        );
        return { keys, prefix, shared };
      } catch (error) {
        console.error('Storage list error:', error);
        return { keys: [], prefix, shared };
      }
    }
  };
  
  // Initialize storage if not already present
  if (typeof window !== 'undefined' && !window.storage) {
    window.storage = StorageMock;
  }
  
  export default StorageMock;