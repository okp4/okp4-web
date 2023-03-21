exports.shouldUpdateScroll = () => {
  // timeout added to give the application time to set the window before scrolling
  setTimeout(() => window.scrollTo(0, 0), 100);
  return false;
};
