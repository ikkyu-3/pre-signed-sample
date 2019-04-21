import getSignedUrlAsync from "./getPreSinedUrlAsync";

async function getPreSignedUrlOfDownload(
  path: string
): Promise<string | Error> {
  try {
    const bucket = process.env.BUCKET;
    if (!bucket) {
      throw new Error("process.env.BUCKET is undefined");
    }
    return await getSignedUrlAsync("getObject", {
      Bucket: process.env.BUCKET,
      Key: path,
    });
  } catch (error) {
    return error;
  }
}

async function main() {
  const result = await getPreSignedUrlOfDownload("sample.mp3");
  console.log(JSON.stringify(result, null, 4));
}

main();
