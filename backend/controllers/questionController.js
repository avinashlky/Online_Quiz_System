// this is working code from here to

const Question = require('../models/Question'); // Make sure this line appears only once

exports.postQuestion = async (req, res) => {
    const { question, optionA, optionB, optionC, optionD, answer } = req.body;

    try {
        const newQuestion = new Question({
            question,
            options: { A: optionA, B: optionB, C: optionC, D: optionD },
            answer,
        });

        await newQuestion.save();
        res.status(201).json({ message: 'Question posted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error posting question' });
    }
};

// till here it is working. 



