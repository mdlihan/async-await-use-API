const allf = async (url, config) => {
  const res = await fetch(url, config);
  if (!res.ok) {
    const message = `Erroer was :${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const deleting = () => {
  allf("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
deleting();

// const patching = () => {
//   allf("https://jsonplaceholder.typicode.com/posts/1",{
//   method:'PATCH',
//   body:JSON.stringify({
//  title: 'foo',
//   }),
//   headers:{
//    'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//     .then((res) => console.log(res))
//    .catch((err) => console.log(err));
// };
// patching();

// const updating = () => {
//   allf("https://jsonplaceholder.typicode.com/posts/1",{
//   method:'put',
//   body:JSON.stringify({
//  id: 1,
//  title: 'foo',
//  body: 'bar',
//  userId: 1,
//   }),
//   headers:{
//    'Content-type': 'application/json; charset=UTF-8',
//   },
//   })
//     .then((res) => console.log(res))
//    .catch((err) => console.log(err));
// };
// updating();

// const send = () => {
//   allf("https://jsonplaceholder.typicode.com/posts",{
//        method:"POST",
//       body:JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers:{
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// send();

// const get = () => {
//   allf("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// get();
