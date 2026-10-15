const Mahasiswa = require("../models/mahasiswaModel");

// GET /mahasiswa
exports.getAll = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find().populate("prodiId");
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /mahasiswa/:id
exports.getById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id).populate("prodiId");
    if (!mahasiswa) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /mahasiswa
exports.create = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /mahasiswa/:id
exports.update = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!mahasiswa) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /mahasiswa/:id
exports.remove = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: "Tidak ditemukan" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};