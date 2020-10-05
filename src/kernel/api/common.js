//@flow

export const callApi: ({+requestURL: string, +method: string, body?: any}) => Promise<any> = ({
  requestURL,
  method,
  body
}) => {
  let correctedBody = null;
  if (body) {
    try {
      correctedBody = JSON.stringify(body);
    } catch {
      correctedBody = null;
    }
  }

  return fetch(requestURL, {
    method: method,
    mode: "cors",
    headers: {
      "Access-Control-Request-Headers": "access-control-allow-origin"
    },
    body: correctedBody
  });
};
