import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';


const CLIENT_ID =
  "1031546748960-hens455a2r040vbvpasdf37alrcjfe9g.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/callback"; // Replace with your redirect URI

const Callback = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    console.log(code);
    if (code) {
      const fetchAccessToken = async (code) => {
        const tokenUrl = "https://oauth2.googleapis.com/token";
        const requestBody = {
          code,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        };

        try {
          const response = await fetch(tokenUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(requestBody),
          });

          if (response.ok) {
            const { access_token } = await response.json();
            console.log(access_token);
            setAccessToken(access_token);
            localStorage.setItem("accessToken", access_token);
            dispatch({ type : "LOGIN_SUCCESS"});
            navigate("/search")
          } else {
            console.error("Failed to fetch access token:", response.status);
          }
        } catch (error) {
          console.error("Failed to fetch access token:", error);
        }
      };

      fetchAccessToken(code);
    } else {
      // Handle error case
    }
  }, [navigate, location.search]);

  return (
    <div>
      <h1>Callback</h1>
      <p>Redirecting...</p>
    </div>
  );
};

export default Callback;
