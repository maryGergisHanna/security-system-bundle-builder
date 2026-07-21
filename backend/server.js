const express = require("express");
const cors = require("cors");

const cameraRoutes = require("./routes/cameras.routes");
const sensorsRoutes = require("./routes/sensors.routes");
const plansRoutes = require("./routes/plans.routes");
const accessoirsRoutes = require("./routes/accessoirs.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Serve images
app.use("/images", express.static("public/images"));

// APIs
app.use("/api/cameras", cameraRoutes);
app.use("/api/sensors", sensorsRoutes);
app.use("/api/plans", plansRoutes);
app.use("/api/accessoirs", accessoirsRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});