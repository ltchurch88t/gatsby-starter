const config = {
  // Default Site Data
  siteTitle: "OG Landing Page",
  siteMetaDescription:
    "This is the OG Landing Page template SEO Meta description",
  siteUrl: "https://urlhere.com",

  // Path Prefix (Don't Touch)
  pathPrefix: "/",

  // Client Info
  clientPhoneNumber: "123-123-1234",
  clientEmail: "lchurch@oppgenetix.com",

  // Tracking IDs
  googleTrackingID: "UA-XXXXXXXX",
  facebookPixelID: "XXXXXXXXXX",

  // Logo Path
  logoPath: "./src/images/logo.png",

  // Api Key for Twilio Emails
  emailApiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

  // Button
  buttonText: "Button Text Here",

  // All replaceable site content goes here
}

if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

module.exports = config
