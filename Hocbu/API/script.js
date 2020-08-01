async function getData() {
  let data = await fetch('https://reqres.in/api/users?page=2');
  let people = await data.json();
  console.log(people);
}

getData();


