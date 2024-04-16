"use server";

import { Logger } from "@/core/utils/Logger";

export const logger = (message: string) => {
  Logger.info(message);
};
