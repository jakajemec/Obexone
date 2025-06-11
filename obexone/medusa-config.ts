import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      host: process.env.HOST || "0.0.0.0",
      port: parseInt(process.env.PORT || "9000", 10),
      public_url: process.env.MEDUSA_BACKEND_URL || "http://89.142.197.86:9000",
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },

  modules: [
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-local",
            id: "local",
            options: {
              upload_dir: "static", // or your upload directory
              backend_url: (process.env.MEDUSA_BACKEND_URL || "http://localhost:9000") + "/static",
            },
          },
        ],
      },
    },
  ],
})
