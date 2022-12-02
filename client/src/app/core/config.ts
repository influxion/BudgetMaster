interface Config {
  [key: string]: string;
  auth: "session" | "token";
}

const backendUrl = "http://localhost:8080";

// Session auth needs to use the same origin anyway
export const config: Config = {
  auth: "token",
  apiUrl: "/api",
  adminUrl: "/api/admin",
  authUrl: "/api/auth",
};

if (config.auth === "token") {
  for (const prop in config) {
    if (prop !== "auth") {
      config[prop] = `${backendUrl}${config[prop]}`;
    }
    console.log(config[prop]);
  }
}

export const auth0 = {
  url: "https://dev-5qi53ez9.eu.auth0.com/v2",
  clientId: "3GGnK7fa8QXii04i1EBsmVKNvgChLvr4",
  returnUrl: "http://localhost:8080",
};
