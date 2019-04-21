import getSignedUrlAsync from "./getPreSinedUrlAsync";

async function getPreSignedUrlOfUpload(path: string): Promise<string | Error> {
  try {
    const bucket = process.env.BUCKET;
    if (!bucket) {
      throw new Error("process.env.BUCKET is undefined");
    }
    return await getSignedUrlAsync("putObject", {
      Bucket: process.env.BUCKET,
      Key: path,
      ContentType: "application/octet-stream",
    });
  } catch (error) {
    return error;
  }
}

async function main() {
  const result = await getPreSignedUrlOfUpload("sample.mp3");
  console.log(JSON.stringify(result, null, 4));
}

main();
