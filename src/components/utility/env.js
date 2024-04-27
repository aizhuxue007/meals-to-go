import { Platform } from "react-native";

export const localHost = "lskqsnyqga-uc.a.run.app/meals-to-go-38736";
export const liveHost = "lskqsnyqga-uc.a.run.app/meals-to-go-38736";

export const isDevelopment = process.env.NODE_ENV === "development";

export const mockMode = true;

export const isAndroid = Platform.OS === "android";

if (isAndroid) {
  console.log("Android");
}

export const host = !isDevelopment && isAndroid ? localHost : liveHost;
