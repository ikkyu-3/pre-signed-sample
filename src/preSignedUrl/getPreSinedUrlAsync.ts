import * as AWS from "aws-sdk";
import env from "dotenv";

env.config();

const s3 = new AWS.S3({ region: "ap-northeast-1" });

function getSignedUrlAsync(operation: string, params: any): Promise<string> {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl(operation, params, (err, url) => {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });
}

export default getSignedUrlAsync;
