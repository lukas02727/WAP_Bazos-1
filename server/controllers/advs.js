const Adv = require("../models/advs");

exports.getAllAdvs = async (req, res) => {
  try {
    const result = await Adv.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Advs found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Advs not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAdvById = async (req, res) => {
  try {
    const result = await Adv.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Adv found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Adv not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteAdv = async (req, res) => {
  try {
    const result = await Adv.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Adv deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateAdv = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      price: req.body.price,
      description: req.body.description,
      ownername: req.body.ownername,
      locality: req.body.locality,
      image: req.body.image,
      password: req.body.password

    };
    const result = await Adv.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Adv updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Adv was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createAdv = async (req, res) => {
  try {
    const data = new Adv({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      price: req.body.price,
      description: req.body.description,
      ownername: req.body.ownername,
      locality: req.body.locality,
      image: req.body.image,
      password: req.body.password
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Adv created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Adv was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
