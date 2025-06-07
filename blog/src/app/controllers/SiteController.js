const Course = require('../models/Course')

class Sitecontroller {
    // [GET] /home
    async index(req, res) {
        try {
            const courses = await Course.find(); // KHÔNG còn cần callback
            res.json(courses); // Trả về kết quả dạng JSON
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new Sitecontroller();
