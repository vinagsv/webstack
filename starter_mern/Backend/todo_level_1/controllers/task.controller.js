//touch the database, use async and await

const newTask = async (req, res) => {
  try {
    console.log(Hello);
    res.status(200).json({
      message: "Created a task",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating a task",
    });
  }
};

export { newTask };
