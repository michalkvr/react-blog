import UserType from '~/types/UserType';

const storage = {
  persistUser: (user: UserType): void => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  retrieveUser: (): UserType | null => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  deleteUser: () => {
    localStorage.removeItem('user');
  },
};

// NOTE:
// Could and should be generic with a type parameter like example below

// const storage: Storage = {
//   persist: <T>(key: string, data: T): void => {
//     localStorage.setItem(key, JSON.stringify(data));
//   },
//   retrieve: <T>(key: string): T | null => {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
//   },
//   delete: (key: string): void => {
//     localStorage.removeItem(key);
//   },
// };

export default storage;
