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

export default storage;
