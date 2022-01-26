function test()
{
  let picture = document.getElementById("target");
  picture.offsetHeight;
  picture.className = "animate";
  console.log("Launched");
}
function test2()
{
  let picture = document.getElementById("target");
  picture.style.display = "none";
  console.log("Launched");
}
function test3()
{
  picture.style.display = "flex";
  console.log("Launched");
}
function test4()
{
  let picture = document.getElementById("target");
  picture.style.display = "none";
  picture.className = "animate";
  console.log("Launched");
}