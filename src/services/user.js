const getUser = (id) => {
  // Mock user data
  const users = [
    { id: 1, name: "John Doe", email: "jdoe@example.com", age: 30 },
    { id: 2, name: "Jane Smith", email: "jsmith@example.com", age: 25 },
  ];
  return users.find((user) => user.id === parseInt(id));
};

export default { getUser };
