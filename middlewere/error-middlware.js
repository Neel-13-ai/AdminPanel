const errorMiddlwere = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Bsckend Error";
  const extraDetails = err.extraDetails || "Error From Backend";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddlwere;
