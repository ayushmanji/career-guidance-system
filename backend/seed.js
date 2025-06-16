const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const careerData = require("./data/careers.json");
const quizData = require("./data/quizzes.json");

mongoose.set("strictQuery", true);
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/career-guidance";

// Import User model
const User = require("./models/user");

async function seedDatabase() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected");

        // ✅ Load Models
        const Career = require("./models/Career");
        const Quiz = require("./models/Quiz");

        console.log("🔄 Clearing old data...");
        await Career.deleteMany({});
        await Quiz.deleteMany({});

        console.log("⬆️ Seeding careers and quizzes...");
        const insertedCareers = await Career.insertMany(careerData);
        const insertedQuizzes = await Quiz.insertMany(quizData);

        console.log(`✅ Inserted ${insertedCareers.length} careers`);
        console.log(`✅ Inserted ${insertedQuizzes.length} quizzes`);

        // ✅ Create Admin User only if not exists
        const existingAdmin = await User.findOne({ email: "admin@example.com" });

        if (!existingAdmin) {
            const admin = new User({
                name: "Admin User",
                email: "admin@example.com",
                password: "admin123", // ✅ You can hash this if desired
                isAdmin: true          // ✅ Must set manually here
            });
            await admin.save();
            console.log("🎉 Admin user created!");
        }

    } catch (error) {
        console.error("❌ Error seeding data:", error);
    } finally {
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
    }
}

seedDatabase();
