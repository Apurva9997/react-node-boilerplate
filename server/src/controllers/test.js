const helloWorld = (req, res, next) => {
  try {
    return res.status(200).send({ message: "Hello world" });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  helloWorld,
};
