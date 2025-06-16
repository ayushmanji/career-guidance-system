const express = require('express');
const mongoose = require('mongoose');
const oracledb = require('oracledb');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
// app.use(cors());
app.use(cors({
    origin: '*', // 👈 Allows requests from anywhere — good for development
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   credentials: true
}));

app.use(express.json());

const userRoutes = require('./routes/user');
app.use("/api/user", userRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Error:", err));

// Oracle DB Connection (Test on startup)
async function connectOracle() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,   // <-- corrected here
            connectString: process.env.ORACLE_CONNECT
        });
        console.log("✅ OracleDB Connected");
        await connection.close();
    } catch (err) {
        console.error("❌ OracleDB Error:", err);
    }
}
// connectOracle();
if (process.env.NODE_ENV !== 'production') {
    connectOracle(); // only run in local/dev
}

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/careers", require("./routes/careers"));
app.use("/api/quiz", require("./routes/quiz"));
app.use("/api/colleges", require("./routes/colleges"));
app.use("/api/admin/colleges", require("./routes/adminColleges"));
app.use('/api/user', require('./routes/user'));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
