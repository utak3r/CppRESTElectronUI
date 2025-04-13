
async function GetSysInfo()
{
  const url = 'http://127.0.0.1:8080/api/system';
  let obj;
  const res = await fetch(url);
  obj = await res.json();
  console.log(obj)
  return obj;
}
