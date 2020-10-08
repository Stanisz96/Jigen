export const strict = false

// export const plugins = [
//     createPersistedState({
//       storage: {
//         getItem: key => Cookies.getJSON(key),
//         setItem: (key, value) => {
//           value = JSON.parse(value)
//           delete value.currentUser
//           Cookies.set(key, value)
//         },
//         removeItem: key => Cookies.remove(key)
//       }
//     })
// ]