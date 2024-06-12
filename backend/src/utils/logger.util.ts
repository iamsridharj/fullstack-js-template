import { createLogger, format, transports } from 'winston';
import config from 'src/configs/base.config';
import path from 'path';

const traceIdFormat = format((info) => {
  if (info.traceId) {
    info.message = `[TraceID: ${info.traceId}] ${info.message}`;
  }
  return info;
});

const logger = createLogger({
  level: "",
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    traceIdFormat(),
    format.json()
  ),
  defaultMeta: { service: 'activity-service' },
  transports: [
    new transports.File({ filename: path.join(process.cwd(), 'logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.join(process.cwd(), 'logs/combined.log') }),
  ],
  exceptionHandlers: [new transports.File({ filename: path.join(process.cwd(), 'logs/exceptions.log') })],
});

if (config.nodeEnv !== 'production') {
  logger.add(new transports.Console({ format: format.combine(format.colorize(), format.simple()) }));
}

export default logger;
