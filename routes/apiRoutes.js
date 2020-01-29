 // Get Pet Profile
 app.get("/api/user/:username", async (req, res) => {
    try {
      const data = await db.Client.findAll({
        where: {
          id: req.param.id
        }
      });
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create a new profile
  app.post("/api/profile", async (req, res) => {
    try {
      const result = await db.Client.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });

  // Create post route for authorization
  app.post("/api/auth", async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await db.Client.findAll({
        where: {
          email
        }
      });
      if (password === result.password) {
        res.send("ok");
      } else {
        res.send("no");
      }
    } catch (error) {
      res.status(400).json({ error: { name: error.name, msg: error.message } });
    }
  });
