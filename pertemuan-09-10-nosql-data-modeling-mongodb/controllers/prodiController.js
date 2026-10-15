const Prodi = require("../models/prodiModel");

exports.getAll = async (req, res) => {
  try {
    const prodi = await Prodi.find();
    res.status(200).json(prodi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const prodi = await Prodi.create(req.body);
    res.status(201).json(prodi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};