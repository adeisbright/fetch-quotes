interface IMongooseOption {
    useNewUrlParser: boolean;
    autoIndex: boolean;
    keepAlive: boolean;
    useUnifiedTopology: boolean;
    keepAliveInitialDelay: number;
    serverSelectionTimeoutMS: number;
    socketTimeoutMS: number;
}

const mongooseOptions: IMongooseOption = {
    useNewUrlParser: true,
    autoIndex: false,
    keepAlive: true,
    useUnifiedTopology: true,
    keepAliveInitialDelay: 5e6,
    serverSelectionTimeoutMS: 10e3,
    socketTimeoutMS: 5000
};

export default mongooseOptions;
