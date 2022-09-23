"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const allyConfig = {
    google: {
        driver: 'google',
        clientId: Env_1.default.get('GOOGLE_CLIENT_ID'),
        clientSecret: Env_1.default.get('GOOGLE_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/google/callback',
        prompt: 'select_account',
        accessType: 'offline',
        hostedDomain: 'adonisjs.com',
        display: 'page',
        scopes: ['userinfo.email', 'calendar.events'],
    },
};
exports.default = allyConfig;
//# sourceMappingURL=ally.js.map