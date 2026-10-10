import { get } from "@vercel/global-config";

export type LiveStatus = {
  isLive: boolean;
  url: string;
};

const defaultLiveStatus: LiveStatus = {
  isLive: false,
  url: "https://www.tiktok.com/@valentshoprj/live",
};

export async function getLiveStatus(): Promise<LiveStatus> {
  if (!process.env.GLOBAL_CONFIG) return defaultLiveStatus;

  try {
    const configuredStatus = await get<Partial<LiveStatus>>("tiktok_live");

    return {
      isLive: configuredStatus?.isLive === true,
      url: configuredStatus?.url || defaultLiveStatus.url,
    };
  } catch {
    return defaultLiveStatus;
  }
}
