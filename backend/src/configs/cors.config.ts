export type SupportedRESTMethods =  "GET" | "POST" 

export interface CorsOptions {
    origin: string[];
    methods: SupportedRESTMethods[];
    allowedHeaders: string[]
}


const corsOptions: CorsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;
  