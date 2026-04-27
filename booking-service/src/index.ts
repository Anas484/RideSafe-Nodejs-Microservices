import express from "express";

const app = express();

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Booking service running on port ${PORT}`);
});
