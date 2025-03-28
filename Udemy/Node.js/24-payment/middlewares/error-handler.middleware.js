module.exports = (error, req, res, next) => {
  if (error.isTransactionError) {
    return res.json({
      error: {
        code: error.transactionErrorCode,
        message: error.transactionErrorMessage,
        data: error.transactionData,
      },
      id: error.transactionId,
    });
  }

  res.status(error.statusCode || 500).json({ error });
};
