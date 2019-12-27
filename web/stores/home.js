export default {
  isReady: false,
  isLoading: false,

  async init() {
    this.isLoading = true;
    setTimeout(() => {
      this.isReady = true;
      this.isLoading = false;
    }, 100);
  },
};
