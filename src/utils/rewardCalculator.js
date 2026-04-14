import logger from "../logger";

export const calculatePoints = (amount) => {
  if (!amount || amount < 0) {
    logger.warn({ message: "Invalid amount", amount });
    return 0;
  }

  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
    points += 50;
  } else if (amount > 50) {
    points += (amount - 50);
  }


  const result = Math.floor(points);

  logger.debug({
    message: "Points calculated",
    amount,
    points: result
  });

  return result;
};