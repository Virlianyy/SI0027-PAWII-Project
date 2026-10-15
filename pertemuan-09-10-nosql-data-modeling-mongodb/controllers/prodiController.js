// Mini Project - Pertemuan 9-10: Controller Prodi (sudah lengkap)

const Prodi = require("../models/prodiModel");

exports.getAll = async (req, res) => {
  try {
    const data = await Prodi.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.getById = async (req, res) => {
  try {
    const prodi = await Prodi.findById(req.params.id);
    if (!prodi) {
      return res.status(404).json({ message: 'Prodi tidak ditemukan' });
    }
    res.json(prodi);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};

exports.create = async (req, res) => {
  try {
    const prodi = await Prodi.create(req.body);
    res.status(201).json(prodi);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const prodi = await Prodi.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!prodi) {
      return res.status(404).json({ message: "Prodi tidak ditemukan" });
    }
    res.json(prodi);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const prodi = await Prodi.findByIdAndDelete(req.params.id);
    if (!prodi) {
      return res.status(404).json({ message: "Prodi tidak ditemukan" });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
