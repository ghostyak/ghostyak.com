export const renewalPreviewPath = "/preview/boxes";

export function isRenewalPreview(pathname: string) {
  return process.env.NODE_ENV === "development" && pathname === renewalPreviewPath;
}
