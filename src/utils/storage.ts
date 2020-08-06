function setStorageItem(name: string, payload: any) {
  localStorage.setItem(name, JSON.stringify(payload));
}

function getStorageItem(name: string): unknown {
  return JSON.parse(localStorage.getItem(name) || 'null');
}

export { setStorageItem, getStorageItem };
