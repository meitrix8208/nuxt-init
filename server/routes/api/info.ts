export default eventHandler(async (event) => {
  const ip = getRequestIP(event, {
    xForwardedFor: true,
  });
  console.log(`Request from IP: ${ip}`);
  return ip;
});
