// controllers/userController.js
const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user?._id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile' });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { name, email, phoneNumber, username } = req.body;

        // Check if the updated email or phone number or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }, { username }] });
        if (existingUser && existingUser._id != req.user._id) {
            return res.status(400).json({ message: 'Email, phone number, or username already exists' });
        }

        // Update user profile
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { $set: { name, email, phoneNumber, username } },
            { new: true }
        ).select('-password');

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile' });
    }
};
