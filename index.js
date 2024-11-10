import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

// Vérification de la variable d'environnement
if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not defined. Please add it to your environment variables."
  );
} else {
  console.log("MONGODB_URI is set correctly:");
}

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    console.log("Connexion à MongoDB réussie");
  } catch (err) {
    console.error("Erreur de connexion à MongoDB", err);
    process.exit(1);
  }
};

const userSchema = mongoose.Schema();

app.post("/user/signup", (req, res) => {
  res.status(200).json("Test Valide ");
});

// Route inexistantes
app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(PORT, () => {
  console.log("Serveur demaré en ecoute sur le port " + PORT);
});