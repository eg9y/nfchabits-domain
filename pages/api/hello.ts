// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "83PBK2ACHB.random1.org.NFCHabits",
          paths: ["*"],
        },
      ],
    },
  });
}
