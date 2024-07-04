const Contact = require("../model/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ mesaage: "message send succesfully" });
  } catch (error) {
    console.error("errror", error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = contactForm;
