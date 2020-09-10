export function writeToLocalStorage(name, data){
  localStorage.setItem(name, JSON.stringify(data))
}

export function readLocalStorage(name){
  const data = localStorage.getItem(name)
  return JSON.parse(data)
}