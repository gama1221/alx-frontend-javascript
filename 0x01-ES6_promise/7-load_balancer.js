export default function loadBalancer(chinaDownload, USDownload) {
  /* eslint-disable */
  return Promise.race([chinaDownload, USDownload]);
}