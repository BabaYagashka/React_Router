import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/BabaYagashka")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center text-2xl m-4 p-4 flex flex-col justify-center items-center space-y-4 text-gray-800">
      Github Followers: {data?.followers} <br />
      URL : {data?.html_url}
      <img className="rounded-3xl " src={data?.avatar_url} alt="Github_pfp" />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/BabaYagashka");
  return response.json();
};
