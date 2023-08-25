"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = require("dotenv");
dotenv.config();
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const AppModule_1 = require("./AppModule");
const ENVIRONMENTS_1 = require("./constants/ENVIRONMENTS");
const connections_1 = require("./providers/mongo/connections");
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule_1.AppModule);
    if (ENVIRONMENTS_1.ENVIRONMENTS.NODE_ENV !== 'test') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Nestjs Template Documentation')
            .setDescription('The Nestjs API description')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config, {
            deepScanRoutes: true,
        });
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await (0, connections_1.connectToDataBase)();
    await app.listen(ENVIRONMENTS_1.ENVIRONMENTS.PORT);
    return app;
}
exports.app = bootstrap();
//# sourceMappingURL=main.js.map