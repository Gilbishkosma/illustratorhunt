import React from "react";


// For Adsense
// export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
//   const pluginOptions = {
//     googleAdClientId: `ca-pub-2352333389468696`, //TODO: Replace with your client-Id
//     head: true // Set to false if you prefer to have your  script loaded at the end of body instead of head.
//   };

//   if (process.env.NODE_ENV !== `production`) {
//     return null;
//   }
//   if (pluginOptions.googleAdClientId === undefined) {
//     return null;
//   }
//   const setComponents = pluginOptions.head
//     ? setHeadComponents
//     : setPostBodyComponents;
//   return setComponents([
//     <script
//       async
//       type="text/javascript"
//       src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//     />,
//     <script
//       key={`gatsby-plugin-google-adsense`}
//       dangerouslySetInnerHTML={{
//         __html: `
//         (adsbygoogle = window.adsbygoogle || []).push({
//             google_ad_client: "${pluginOptions.googleAdClientId}",
//             enable_page_level_ads: true
//         });
//         `
//       }}
//     />
//   ]);
// };