const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const submitInnovations = require("./routes/submitInnovationRoutes");
const supportInnovation = require("./routes/supportInnovationRoutes");
const videoSubmit = require("./routes/videoRoutes");
const qualityTest = require("./routes/qualityTestRoutes");
const article = require("./routes/articleRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const products = require("./routes/productRoutes");

dotenv.config();
connectDB();
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
	res.send("API is Running");
});

app.use("/user/admin", adminRoutes);
app.use("/user", userRoutes);
// app.use("/innovation", submitInnovations);
app.use("/video", videoSubmit);
// app.use("/supportInnovation", supportInnovation);
app.use("/qualityTest", qualityTest);
app.use("/article", article);
app.use("/product", products);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
