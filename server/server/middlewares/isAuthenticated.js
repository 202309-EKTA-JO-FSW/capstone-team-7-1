const mockAuthMiddleware = (req, res, next) => {
    req.user = {_id: 'mockUserId'}; // Replace 'mockUserId' with an actual ID from your database
    next();
  };