const data = require("../data");

module.exports = {
  listUsers: (req, res) => res.json(data),
  showUser: (req, res) => {
    const idRequest = req.params.id;
    const userToFind = data.find((user) => user.id == idRequest);
    if (!userToFind) {
      res.status(400).json("This Id does not exist");
    } else {
      res.json(userToFind);
    }
  },
  createUser: (req, res) => {
    const sampleUser = {
      id: data.length + 1,
      ...req.body,
    };
    data.push(sampleUser);
    console.log(req.body);

    res.json(data);
  },
  updateUser: (req, res) => {
    const userToUpdateIndex = data.findIndex(
      (user) => user.id == req.params.id
    );

    if (userToUpdateIndex == -1) {
      res.status(400).json("This Id does not exist");
    } else {
      data[userToUpdateIndex] = { ...data[userToUpdateIndex], ...req.body };
      res.json(data);
    }
  },
  deleteUser: (req, res) => {
    const userToDelete = req.params.id;
    const findUser = data.findIndex((user) => user.id == userToDelete);

    if (findUser == -1) {
      res.status(400).json("This Id does not exist");
    } else {
      data.splice(findUser, 1);
      res.json(data);
    }
  },
};
