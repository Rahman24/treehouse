export const parseSessionData = (user) => {
  if (user) {
    const { uid, email, displayName, accessToken } = user;
    return { uid, email, displayName, accessToken };
  }
  return {};
};
