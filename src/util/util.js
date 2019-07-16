function isWexin() {
  const nua = navigator.userAgent.toLowerCase()
  return nua.indexOf("micromessenger") !== -1;
}

export default {
  isWexin
}