// import { UserResponse } from "@repo/schema";
// import swr from "swr";

// const url = "http://localhost:3000/api/user";

// export function useUser() {
//   const { data, error } = swr<UserResponse>(url, {
//     fetcher: async () => {
//       const res = await fetch(url);
//       return res.json();
//     },
//     onSuccess: () => {
//       console.log("success");
//     },
//     onError: (error) => {
//       console.log(error);
//     },
//   });
//   return { data, error };
// }
