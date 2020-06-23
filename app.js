const Express = require("express");
const app = Express();
const spawn = require("child_process").spawn;

const PORT = 3000;

/**
 * Simple get route to get two variables from url
 */
app.get("/foo/:username/:password", (req, res) => {
  /**
   * Extracting the data from the url
   */
  const { username, password } = req.params;

  /**
   * Calling a child process with the arguments username and password
   * Can change python3 to python if required, it is basically the name
   * of the program that's executed. Rest all three are arguments.
   */
  const pythonProcess = spawn("python3", ["./worker.py", username, password]);

  /**
   * Wait for python process to respond with some data, then send the string
   * version of it to the user
   */
  pythonProcess.stdout.on("data", (data) => {
    res.json({ response: String(data) });
  });
});

/**
 * Listen on port 3000 for requests
 */
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
